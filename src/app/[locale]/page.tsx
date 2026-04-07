import { useTranslations } from 'next-intl';
import styled from "styled-components";
import styles from "../page.module.css";

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
  color: #0f172a;
`;

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0b3b2e;
  background: #d1fae5;
`;

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StyledBadge>styled-components</StyledBadge>
        <StyledTitle>{t('title')}</StyledTitle>
        <p className={styles.description}>{t('description')}</p>
      </main>
    </div>
  );
}
