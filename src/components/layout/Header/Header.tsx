import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LangSwitcher from './LangSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className={styles['header']}>

      {/* 상단 유틸리티 바 */}
      <div className={styles['header-util']}>
        <div className="inner">
          <ul className={styles['header-util-list']}>
            <li><Link href="#">{t('util.delivery')}</Link></li>
            <li><Link href="#">{t('util.hvacContact')}</Link></li>
            <li><Link href="#">{t('util.recruit')}</Link></li>
            <LangSwitcher />
          </ul>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className={styles['header-main']}>
        <div className="inner">
          <div className={styles['header-inner']}>

            {/* 로고 + GNB */}
            <div className={styles['header-left']}>
              <h1 className={styles['header-logo']}>
                <Link href="/">
                  <Image
                    src="/images/common/logo.svg"
                    alt="삼성전자로지텍"
                    width={242}
                    height={19}
                    priority
                  />
                </Link>
              </h1>

              <nav className={styles['header-gnb']} aria-label="주요 메뉴">
                <ul>

                  {/* 서비스소개 — 메가 메뉴 */}
                  <li className={styles['gnb-item']}>
                    <Link href="#">{t('gnb.service')}</Link>
                    <div className={styles['gnb-submenu']}>
                      <div className="inner">
                        <div className={styles['gnb-submenu-inner']}>
                          <div className={styles['gnb-submenu-group']}>
                            <strong className={styles['gnb-submenu-title']}>{t('submenu.delivery.title')}</strong>
                            <ul>
                              <li><Link href="#">{t('submenu.delivery.b2c')}</Link></li>
                              <li><Link href="#">{t('submenu.delivery.move')}</Link></li>
                              <li><Link href="#">{t('submenu.delivery.reform')}</Link></li>
                              <li><Link href="#">{t('submenu.delivery.logistics')}</Link></li>
                              <li><Link href="#">{t('submenu.delivery.builtin')}</Link></li>
                              <li><Link href="#">{t('submenu.delivery.material')}</Link></li>
                            </ul>
                          </div>
                          <div className={styles['gnb-submenu-group']}>
                            <strong className={styles['gnb-submenu-title']}>{t('submenu.hvac.title')}</strong>
                            <ul>
                              <li><Link href="#">{t('submenu.hvac.maintenance')}</Link></li>
                              <li><Link href="#">{t('submenu.hvac.cleaning')}</Link></li>
                              <li><Link href="#">{t('submenu.hvac.central')}</Link></li>
                              <li><Link href="#">{t('submenu.hvac.smartthings')}</Link></li>
                              <li><Link href="#">{t('submenu.hvac.esi')}</Link></li>
                              <li><Link href="#">{t('submenu.hvac.parts')}</Link></li>
                            </ul>
                          </div>
                          <div className={styles['gnb-submenu-group']}>
                            <strong className={styles['gnb-submenu-title']}>{t('submenu.export.title')}</strong>
                            <ul>
                              <li><Link href="#">{t('submenu.export.import')}</Link></li>
                              <li><Link href="#">{t('submenu.export.forwarding')}</Link></li>
                              <li><Link href="#">{t('submenu.export.trade')}</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className={styles['gnb-item']}><Link href="#">{t('gnb.hvac')}</Link></li>
                  <li className={styles['gnb-item']}><Link href="#">{t('gnb.partner')}</Link></li>
                  <li className={styles['gnb-item']}><Link href="#">{t('gnb.support')}</Link></li>
                  <li className={styles['gnb-item']}><Link href="#">{t('gnb.news')}</Link></li>
                  <li className={styles['gnb-item']}><Link href="#">{t('gnb.about')}</Link></li>

                </ul>
              </nav>
            </div>

            {/* 검색/마이페이지 */}
            <div className={styles['header-actions']}>
              <button type="button" className={styles['header-btn-search']} aria-label={t('actions.search')}>
                <Image src="/images/common/icon-search.svg" alt="" width={26} height={26} />
              </button>
              <button type="button" className={styles['header-btn-mypage']} aria-label={t('actions.mypage')}>
                <Image src="/images/common/icon-mypage.svg" alt="" width={26} height={26} />
              </button>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
