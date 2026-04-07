'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './Header.module.css';

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <li className={styles['header-lang']}>
      <button
        type="button"
        aria-pressed={locale === 'ko'}
        onClick={() => switchLocale('ko')}
      >
        KR
      </button>
      <button
        type="button"
        aria-pressed={locale === 'en'}
        onClick={() => switchLocale('en')}
      >
        EN
      </button>
    </li>
  );
}
