# i18n 설정 가이드 (toy-selc)

이 문서는 현재 코드 기준으로 이 프로젝트의 다국어(i18n) 설정 방식을 정리합니다.

## 1) 사용 기술

- `next-intl` `^4.9.0`
- Next.js App Router (`next` `16.2.2`)

핵심 포인트는 다음과 같습니다.

- URL locale 세그먼트 기반 라우팅 (`/[locale]/...`)
- 미들웨어에서 locale 라우팅 적용
- 요청 시 locale별 메시지 JSON 동적 로드
- `NextIntlClientProvider`로 클라이언트 컴포넌트 번역 사용

---

## 2) 전체 동작 흐름

1. 사용자가 경로에 접근 (`/ko`, `/en`, 또는 locale 없는 경로)
2. `src/proxy.ts` 미들웨어가 `next-intl` 라우팅 규칙을 적용
3. `src/i18n/request.ts`가 현재 locale을 해석하고 메시지 파일을 로드
4. `src/app/[locale]/layout.tsx`에서 `NextIntlClientProvider`에 메시지를 주입
5. 각 컴포넌트에서 `useTranslations('namespace')`로 키를 읽어 렌더링

---

## 3) 파일별 역할

### `src/i18n/routing.ts`

라우팅 정책을 정의합니다.

- 지원 locale: `ko`, `en`
- 기본 locale: `ko`

```ts
export const routing = defineRouting({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
});
```

### `src/proxy.ts`

`next-intl` 미들웨어를 등록합니다.

- `createMiddleware(routing)`으로 locale 라우팅/매칭 적용
- `matcher: ['/((?!_next|.*\\..*).*)']`로 정적 리소스/내부 경로 제외

### `src/i18n/request.ts`

요청 단위 i18n 설정을 구성합니다.

- `requestLocale`을 받아 유효성 검사
- 유효하지 않으면 `defaultLocale`로 폴백
- locale별 메시지 파일을 병렬 로드

```ts
const [common, header, footer] = await Promise.all([
  import(`../../messages/${locale}/common.json`),
  import(`../../messages/${locale}/header.json`),
  import(`../../messages/${locale}/footer.json`),
]);
```

로드 후 최종 메시지 구조는 아래처럼 합쳐집니다.

```ts
messages: {
  ...common.default,
  header: header.default,
  footer: footer.default,
}
```

즉,

- `common.json`은 루트 레벨 메시지
- `header.json`은 `header.*`
- `footer.json`은 `footer.*`

형태로 접근됩니다.

### `next.config.ts`

`next-intl` 플러그인을 App에 연결합니다.

```ts
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
```

여기서 `request.ts`를 지정해야 서버 요청 시점에 locale/messages 구성이 적용됩니다.

### `src/app/[locale]/layout.tsx`

locale 세그먼트 레이아웃에서 메시지를 Provider로 주입합니다.

```tsx
const messages = await getMessages();

<html lang={locale}>
  <body>
    <NextIntlClientProvider messages={messages}>...</NextIntlClientProvider>
  </body>
</html>;
```

이 레이아웃 아래의 클라이언트 컴포넌트는 `useTranslations`를 바로 사용할 수 있습니다.

### `src/i18n/navigation.ts`

locale-aware 네비게이션 유틸을 제공합니다.

```ts
export const { Link, useRouter, usePathname, redirect } = createNavigation(routing);
```

프로젝트 내부 링크/라우팅에서 이 유틸을 사용하면 locale 컨텍스트를 유지하기 쉽습니다.

### `src/components/layout/Header/LangSwitcher.tsx`

언어 스위처 구현입니다.

- 현재 locale: `useLocale()`
- 현재 경로: `usePathname()`
- locale 변경: `router.replace(pathname, { locale: nextLocale })`

현재 경로를 유지한 채 locale만 교체합니다.

---

## 4) 메시지 파일 구조

현재 디렉터리:

```text
messages/
  ko/
    common.json
    header.json
    footer.json
  en/
    common.json
    header.json
    footer.json
```

권장 규칙:

- 언어별로 동일한 파일 세트 유지
- 두 언어 간 동일한 키 구조 유지
- UI 섹션 단위(`header`, `footer`, `common`)로 분리

예시:

- Header 컴포넌트: `useTranslations('header')`
- Footer 컴포넌트: `useTranslations('footer')`

---

## 5) 실제 사용 예시

### Header

`src/components/layout/Header/Header.tsx`

```tsx
const t = useTranslations('header');
<Link href="#">{t('util.delivery')}</Link>;
```

`messages/ko/header.json`의 `util.delivery` 또는
`messages/en/header.json`의 같은 키를 locale에 따라 자동으로 사용합니다.

### Footer

`src/components/layout/Footer/Footer.tsx`

```tsx
const t = useTranslations('footer');
<li>
  <Link href="#">{t('policy.terms')}</Link>
</li>;
```

---

## 6) 새 번역 키 추가 방법

1. 해당 namespace JSON에 키를 추가
2. 다른 locale JSON에도 동일 키를 추가
3. 컴포넌트에서 `t('key.path')`로 사용

체크 포인트:

- 두 locale 간 키 불일치가 있으면 런타임에서 누락 번역 문제가 발생할 수 있음
- PR에서 JSON 키 동기화 확인 권장

---

## 7) 새 언어(locale) 추가 방법

예: `ja` 추가

1. `src/i18n/routing.ts` 수정

```ts
locales: ['ko', 'en', 'ja'];
```

2. 메시지 파일 추가

```text
messages/ja/common.json
messages/ja/header.json
messages/ja/footer.json
```

3. `LangSwitcher` UI에 버튼 추가

```tsx
onClick={() => switchLocale('ja')}
```

4. 필요 시 기본 locale 정책 검토 (`defaultLocale`)

---

## 8) 현재 코드 기준 주의사항

- `src/components/layout/Header/Header.tsx`, `src/components/layout/Footer/Footer.tsx`는 번역 적용 완료 상태
- `src/components/pages/main/HomeIntro/HomeIntro.tsx`는 현재 하드코딩된 한국어 문자열을 사용 중

즉, locale을 `en`으로 바꿔도 `HomeIntro` 텍스트는 한국어로 표시됩니다.
이 섹션까지 다국어화하려면 `messages/*`에 키를 추가하고 `useTranslations`로 교체해야 합니다.

---

## 9) 트러블슈팅

### 번역 키가 그대로 보일 때

- `useTranslations` namespace가 JSON 구조와 일치하는지 확인
- `request.ts`에서 해당 JSON 파일을 로드/병합하고 있는지 확인

### locale 전환이 안 될 때

- `LangSwitcher`에서 `router.replace(pathname, { locale })` 호출 여부 확인
- `src/proxy.ts`의 `matcher`가 경로를 정상 매칭하는지 확인

### 특정 locale에서만 에러가 날 때

- 해당 locale JSON의 문법(JSON trailing comma 등) 확인
- 다른 locale과 키 구조가 같은지 비교

---

## 10) 정리

이 프로젝트의 i18n은 `next-intl`의 권장 App Router 패턴으로 구성되어 있습니다.

- 라우팅 정책: `src/i18n/routing.ts`
- 미들웨어 적용: `src/proxy.ts`
- 요청별 메시지 구성: `src/i18n/request.ts`
- Provider 주입: `src/app/[locale]/layout.tsx`
- locale-aware 네비게이션: `src/i18n/navigation.ts`

이 구조를 유지하면 페이지/컴포넌트 단위 확장과 locale 추가를 안정적으로 진행할 수 있습니다.
