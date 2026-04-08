import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeIntro.module.css';

const cards = [
  {
    id: 'business',
    bg: '/images/main/biz-bg-01.webp',
    title: '기업/서비스',
    desc: '고객 일상의 설치 경험과 B2B운영 환경까지 지원하는\n종합 서비스 플랫폼 기업 삼성전자 로지텍',
    links: [
      { label: '주요서비스', href: '#', solid: false },
      { label: '회사소개', href: '#', solid: true },
    ],
  },
  {
    id: 'hvac',
    bg: '/images/main/biz-bg-02.webp',
    title: 'HVAC신사업',
    desc: '에어컨 유지보수부터 스마트 빌딩 솔루션까지\nHVAC 전문 서비스를 제공합니다.',
    links: [
      { label: 'HVAC 서비스', href: '#', solid: false },
      { label: '서비스 신청', href: '#', solid: true },
    ],
  },
  {
    id: 'partner',
    bg: '/images/main/biz-bg-03.webp',
    title: '관계사 서비스',
    desc: '삼성전자 관계사와 함께하는\n다양한 서비스를 만나보세요.',
    links: [
      { label: '관계사 안내', href: '#', solid: false },
      { label: '서비스 바로가기', href: '#', solid: true },
    ],
  },
];

export default function HomeIntro() {
  return (
    <section className={styles['home-intro']} aria-labelledby="intro-heading">
      <div className="inner">
        {/* 상단 소개 텍스트 */}
        <div className={styles['intro-header']}>
          <h2 id="intro-heading" className={styles['intro-heading']} data-aos="fade-up">
            고객이 감동하는 최상의 물류서비스를
            <br />
            제공하는 삼성전자로지텍입니다.
          </h2>
          <div className={styles['intro-summary']} data-aos="fade-up" data-aos-delay="200">
            <strong className={styles['intro-summary-title']}>Quality, CS, Efficiency</strong>
            <p className={styles['intro-summary-desc']}>
              당사의 주요 물류서비스는 삼성전자 전 생산제품 및 서비스 자재를 대상으로 국내판매물류,
              해외판매물류 및 B2B설치의 전략 및 운영 업무를 전담하여 수행하고 있으며, 전국
              주요지역에 물류 네트워크를 구축하고 있습니다.
            </p>
          </div>
        </div>

        {/* 카드 영역 */}
        <ul className={styles['intro-cards']} role="list">
          {cards.map((card, index) => (
            <li
              key={card.id}
              className={styles['intro-card']}
              data-aos="fade-up"
              data-aos-delay={500 + index * 150}
            >
              {/* 배경 이미지 */}
              <div className={styles['intro-card-img-wrap']} aria-hidden="true">
                <Image
                  src={card.bg}
                  alt=""
                  fill
                  sizes="(max-width: 1200px) 33vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* 어두운 오버레이 */}
              <div className={styles['intro-card-overlay']} aria-hidden="true" />

              {/* 콘텐츠 */}
              <div className={styles['intro-card-content']}>
                <h3 className={styles['intro-card-title']}>{card.title}</h3>
                <div className={styles['intro-card-body']}>
                  <p className={styles['intro-card-desc']}>
                    {card.desc.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <div className={styles['intro-card-btns']}>
                    {card.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={
                          link.solid ? styles['intro-btn-solid'] : styles['intro-btn-outline']
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
