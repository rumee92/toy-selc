import MainVisual from '@/components/pages/main/MainVisual/MainVisual';
import HomeIntro from '@/components/pages/main/HomeIntro/HomeIntro';
import HvacService from '@/components/pages/main/HvacService/HvacService';

export default function HomePage() {
  return (
    <main>
      <MainVisual />
      <HomeIntro />
      <HvacService />
    </main>
  );
}
