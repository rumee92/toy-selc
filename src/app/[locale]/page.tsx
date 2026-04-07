import { useTranslations } from 'next-intl';
import Button from '@/components/common/Button/Button';
import Tab from '@/components/common/Tab/Tab';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      <main>
        <p>{t('description')}</p>
        <Button variant="solid">상담/문의</Button>
        <Button variant="outline">HVAC서비스 소개</Button>
        <Button variant="text">바로가기</Button>
        <Button variant="icon" size="md">
          ›
        </Button>
        <Tab items={['뉴스', '이벤트/프로모션', '채용']} />
      </main>
    </div>
  );
}
