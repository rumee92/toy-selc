'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainVisual.module.css';

const panels = [
  {
    id: 'delivery',
    bg: '/images/main/main-bg-01.webp',
    title: '배송상태를\n확인하고 싶어요.',
    desc: '주문 및 배송 진행상황을 확인하고\n필요한 안내를 빠르게 찾을 수 있습니다.',
    links: [
      { label: '배송조회', href: '#' },
      { label: '배송설치 주문조회', href: '#' },
      { label: '관련FAQ', href: '#' },
    ],
  },
  {
    id: 'hvac',
    bg: '/images/main/main-bg-02.webp',
    title: 'HVAC 서비스를\n문의하고 싶어요.',
    desc: 'HVAC서비스를 이해하고, 상담, 접수,\n서비스 신청까지 가능합니다.',
    links: [
      { label: 'HVAC 서비스개요', href: '#' },
      { label: '상담/문의', href: '#' },
      { label: '서비스 접수', href: '#' },
      { label: '세척접수', href: '#' },
    ],
  },
  {
    id: 'contract',
    bg: '/images/main/main-bg-03.webp',
    title: '계약 정보를\n확인하고 싶어요.',
    desc: '유지보수 계약정보와 서비스 범위를 확인하고\n필요시 계약 갱신을 하실 수 있습니다.',
    links: [
      { label: 'HVAC계약정보', href: '#' },
      { label: '갱신/문의 연결', href: '#' },
    ],
  },
  {
    id: 'support',
    bg: '/images/main/main-bg-04.webp',
    title: '회사와 서비스에 대해\n궁금한 부분이 있어요.',
    desc: '지금 필요한 도움을 빠르게\n확인하실 수 있습니다.',
    links: [
      { label: '1:1문의', href: '#' },
      { label: '고객의 소리', href: '#' },
      { label: '자주 묻는 질문', href: '#' },
    ],
  },
];

const partnerLinks = [
  { label: '삼성닷컴 AI 구독클럽', href: '#' },
  { label: '삼성케어플러스', href: '#' },
  { label: '에어컨 유지보수/세척', href: '#' },
  { label: '인테리어핏 설치서비스', href: '#' },
];

export default function MainVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles['main-visual']} aria-label="주요 서비스 바로가기">
      {/* 배경 이미지 — 패널 hover 시 교체 */}
      <div className={styles['mv-bg-wrap']} aria-hidden="true">
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className={`${styles['mv-bg']} ${activeIndex === index ? styles['mv-bg-active'] : ''}`}
          >
            <Image
              src={panel.bg}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
        {/* 가독성을 위한 어두운 오버레이 */}
        <div className={styles['mv-overlay']} />
      </div>

      <div className="inner">
        <div className={styles['mv-content']}>
          {/* 패널 영역 */}
          <ul className={styles['mv-panels']} role="list">
            {panels.map((panel, index) => (
              <li
                key={panel.id}
                className={`${styles['mv-panel']} ${activeIndex === index ? styles['mv-panel-active'] : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h2 className={styles['mv-panel-title']}>
                  {panel.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
                <p className={styles['mv-panel-desc']}>
                  {panel.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <ul className={styles['mv-panel-links']}>
                  {panel.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* 관계사 서비스 카드 */}
          <div className={styles['mv-partner']}>
            <div className={styles['mv-partner-info']}>
              <strong className={styles['mv-partner-title']}>삼성전자로지텍 관계사 서비스</strong>
              <p className={styles['mv-partner-desc']}>
                삼성전자로지텍에서 제공하는
                <br />
                삼성전자의 다양한서비스를 확인해보세요
              </p>
            </div>
            <ul className={styles['mv-partner-links']}>
              {partnerLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles['mv-partner-btn']}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
