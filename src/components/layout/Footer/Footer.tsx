import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className={styles['footer']}>

      {/* 상단 유틸리티 바 */}
      <div className={styles['footer-util']}>
        <div className="inner">
          <ul className={styles['footer-util-list']}>
            <li><Link href="#">{t('util.delivery')}</Link></li>
            <li><Link href="#">{t('util.hvacContact')}</Link></li>
            <li><Link href="#">{t('util.hvacContract')}</Link></li>
            <li><Link href="#">{t('util.voice')}</Link></li>
            <li><Link href="#">{t('util.about')}</Link></li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles['footer-util-external']}>
                {t('util.recruit')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 사이트맵 */}
      <div className={styles['footer-sitemap']}>
        <div className="inner">
          <div className={styles['footer-sitemap-inner']}>

            {/* 서비스소개 */}
            <div className={`${styles['footer-col']} ${styles['footer-col--wide']}`}>
              <strong className={styles['footer-col-title']}>{t('sitemap.service.title')}</strong>
              <div className={styles['footer-col-inner']}>
                <div>
                  <ul className={styles['footer-col-group']}>
                    <li className={styles['footer-col-subtitle']}>{t('sitemap.service.delivery.subtitle')}</li>
                    <li><Link href="#">{t('sitemap.service.delivery.b2c')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.delivery.move')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.delivery.reform')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.delivery.logistics')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.delivery.builtin')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.delivery.material')}</Link></li>
                  </ul>
                  <ul className={styles['footer-col-group']}>
                    <li className={styles['footer-col-subtitle']}>{t('sitemap.service.export.subtitle')}</li>
                    <li><Link href="#">{t('sitemap.service.export.import')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.export.forwarding')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.export.trade')}</Link></li>
                  </ul>
                </div>
                <div>
                  <ul className={styles['footer-col-group']}>
                    <li className={styles['footer-col-subtitle']}>{t('sitemap.service.hvac.subtitle')}</li>
                    <li><Link href="#">{t('sitemap.service.hvac.maintenance')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.hvac.cleaning')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.hvac.central')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.hvac.smartthings')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.hvac.esi')}</Link></li>
                    <li><Link href="#">{t('sitemap.service.hvac.parts')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HVAC 서비스 */}
            <div className={styles['footer-col']}>
              <strong className={styles['footer-col-title']}>{t('sitemap.hvac.title')}</strong>
              <ul>
                <li><Link href="#">{t('sitemap.hvac.overview')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.maintenance')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.process')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.sacApply')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.sacCleaning')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.consult')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.contract')}</Link></li>
                <li><Link href="#">{t('sitemap.hvac.faq')}</Link></li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div className={styles['footer-col']}>
              <strong className={styles['footer-col-title']}>{t('sitemap.support.title')}</strong>
              <ul>
                <li><Link href="#">{t('sitemap.support.delivery')}</Link></li>
                <li><Link href="#">{t('sitemap.support.inquiry')}</Link></li>
                <li><Link href="#">{t('sitemap.support.faq')}</Link></li>
                <li><Link href="#">{t('sitemap.support.notice')}</Link></li>
                <li><Link href="#">{t('sitemap.support.voice')}</Link></li>
              </ul>
            </div>

            {/* 관계사 서비스 */}
            <div className={styles['footer-col']}>
              <strong className={styles['footer-col-title']}>{t('sitemap.partner.title')}</strong>
              <ul>
                <li><Link href="#">{t('sitemap.partner.samsung')}</Link></li>
                <li><Link href="#">{t('sitemap.partner.store')}</Link></li>
                <li><Link href="#">{t('sitemap.partner.service')}</Link></li>
                <li><Link href="#">{t('sitemap.partner.care')}</Link></li>
              </ul>
            </div>

            {/* 이벤트/뉴스 */}
            <div className={styles['footer-col']}>
              <strong className={styles['footer-col-title']}>{t('sitemap.news.title')}</strong>
              <ul>
                <li><Link href="#">{t('sitemap.news.promotion')}</Link></li>
                <li><Link href="#">{t('sitemap.news.news')}</Link></li>
                <li><Link href="#">{t('sitemap.news.repurchase')}</Link></li>
              </ul>
            </div>

            {/* 회사소개 */}
            <div className={styles['footer-col']}>
              <strong className={styles['footer-col-title']}>{t('sitemap.about.title')}</strong>
              <ul className={styles['footer-col-group']}>
                <li><Link href="#">{t('sitemap.about.info')}</Link></li>
                <li><Link href="#">{t('sitemap.about.ceo')}</Link></li>
                <li><Link href="#">{t('sitemap.about.ethics')}</Link></li>
                <li><Link href="#">{t('sitemap.about.social')}</Link></li>
                <li><Link href="#">{t('sitemap.about.safety')}</Link></li>
                <li><Link href="#">{t('sitemap.about.network')}</Link></li>
              </ul>
              <ul className={styles['footer-col-group']}>
                <li className={styles['footer-col-subtitle']}>{t('sitemap.about.recruitTitle')}</li>
                <li><Link href="#">{t('sitemap.about.recruitGuide')}</Link></li>
                <li><Link href="#">{t('sitemap.about.recruitPost')}</Link></li>
                <li><Link href="#">{t('sitemap.about.apply')}</Link></li>
                <li><Link href="#">{t('sitemap.about.hrSystem')}</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className={styles['footer-bottom']}>
        <div className="inner">
          <ul className={styles['footer-policy']}>
            <li><Link href="#">{t('policy.terms')}</Link></li>
            <li><Link href="#" className={styles['footer-policy--em']}>{t('policy.privacy')}</Link></li>
            <li><Link href="#">{t('policy.contact')}</Link></li>
            <li>
              <button type="button" className={styles['footer-family-site']}>
                {t('policy.familySite')}
                <span className={styles['footer-family-site-icon']} aria-hidden="true" />
              </button>
            </li>
          </ul>
          <address className={styles['footer-info']}>
            <p>{t('info.address')}</p>
            <p>{t('info.tel')}</p>
            <p>{t('info.install')}</p>
          </address>
          <p className={styles['footer-copy']}>{t('info.copyright')}</p>
        </div>
      </div>

    </footer>
  );
}
