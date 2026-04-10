'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './HvacService.module.css';

type Desc = { type: 'text'; value: string } | { type: 'list'; items: string[] };

type SubItem = {
  subTitle: string;
  subDesc: string;
  link: { label: string; href: string };
};

const slides: {
  id: string;
  img: string;
  title: string;
  desc: Desc;
  subs: SubItem[];
}[] = [
  {
    id: 'overview',
    img: '/images/main/hvac-img-01.webp',
    title: 'HVAC서비스 개요',
    desc: {
      type: 'text',
      value:
        '시스템 에어컨 운영에 필요한 유지보수\n수리, 제공하며 B2B고객의 사업장 운영 환경을\n전문적으로 지원합니다.',
    },
    subs: [
      {
        subTitle: '상담/문의',
        subDesc: '서비스 내용과 이용가능 여부를\n먼저 상담하고 싶다면 문의를\n남겨주세요',
        link: { label: '서비스 개요', href: '#' },
      },
    ],
  },
  {
    id: 'consult',
    img: '/images/main/hvac-img-02.webp',
    title: '유지보수/수리/세척',
    desc: {
      type: 'list',
      items: [
        '유지보수\n운영 안정성과 설비 효율을 높입니다.',
        '수리\n장비이슈에 신속하게 대응합니다.',
        '세척\n설비위생과 운영환경을 개선합니다.',
      ],
    },
    subs: [
      {
        subTitle: 'SAC서비스 접수',
        subDesc: '유지보수 및 일반 서비스 요청을\n온라인으로 접수할 수 있습니다.',
        link: { label: '서비스 접수하기', href: '#' },
      },
      {
        subTitle: '세척접수',
        subDesc: '세척이 필요한 설비에 대해\n별도접수경로로 빠르게 요청할 수 있습니다.',
        link: { label: '세척 접수하기', href: '#' },
      },
    ],
  },
  {
    id: 'maintenance',
    img: '/images/main/hvac-img-03.webp',
    title: '서비스 절차 안내',
    desc: {
      type: 'list',
      items: [
        '서비스이해\n필요한 HVAC서비스 범위를 확인합니다.',
        '상담/문의\n사업장 환경과 요청 내용을 전달 합니다/',
        '접수진행\n서비스접수 또는 세척접수를 등록합니다.',
        '후속지원\n절차에따라 운영 지원이 이어집니다.',
      ],
    },
    subs: [
      {
        subTitle: '계약정보 조회',
        subDesc: '유지보수 계약고객은\n계약기간, 대상설비, 서비스범위를 확인\n하실 수 있습니다.',
        link: { label: '계약정보 확인', href: '#' },
      },
    ],
  },
];

export default function HvacService() {
  return (
    <section className={styles['hvac-service']} aria-labelledby="hvac-heading">
      <div className="inner">
        <div className={styles['hvac-inner']}>
          {/* 헤더 텍스트 */}
          <div className={styles['hvac-header']}>
            <h2 id="hvac-heading" className={styles['hvac-title']}>
              HVAC SERVICE
            </h2>
            <p className={styles['hvac-desc']}>
              고성능·고효율은 기본이고 AI 홈과 스마트싱스가 탑재돼
              <br />
              더욱 편리하게 에너지를 관리하여
              <br />
              차별화된 공조 솔루션을 선보입니다.
            </p>
          </div>

          {/* 슬라이더 */}
          <div className={styles['hvac-slider-wrap']}>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1.3}
              spaceBetween={52}
              navigation={{
                prevEl: `.${styles['hvac-nav-prev']}`,
                nextEl: `.${styles['hvac-nav-next']}`,
              }}
              pagination={{
                el: `.${styles['hvac-pagination']}`,
                type: 'progressbar',
              }}
              className={styles['hvac-swiper']}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className={styles['hvac-slide']}>
                  <div className={styles['hvac-slide-img-wrap']}>
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles['hvac-card-left']}>
                      <h3 className={styles['hvac-card-title']}>{slide.title}</h3>
                      {slide.desc.type === 'list' ? (
                        <ul className={styles['hvac-card-list']}>
                          {slide.desc.items.map((item) => (
                            <li key={item}>
                              {item.split('\n').map((line, i) => (
                                <span key={i}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={styles['hvac-card-desc']}>
                          {slide.desc.value.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles['hvac-slide-content']}>
                    {slide.subs.map((sub) => (
                      <div key={sub.subTitle} className={styles['hvac-sub-item']}>
                        <h4 className={styles['hvac-slide-title']}>{sub.subTitle}</h4>
                        <p className={styles['hvac-slide-desc']}>
                          {sub.subDesc.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                        <Link href={sub.link.href} className={styles['hvac-slide-btn']}>
                          {sub.link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 페이지네이션 + 내비게이션 */}
            <div className={styles['hvac-controls']}>
              <div className={styles['hvac-pagination']} />
              <div className={styles['hvac-nav']}>
                <button
                  type="button"
                  className={styles['hvac-nav-prev']}
                  aria-label="이전 슬라이드"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M12 4L6 10L12 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles['hvac-nav-next']}
                  aria-label="다음 슬라이드"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M8 4L14 10L8 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
