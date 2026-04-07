'use client';
import { useTab } from './useTab';
import styles from './Tab.module.css';

interface TabProps {
  items: string[];
  onChange?: (index: number) => void;
}

export default function Tab({ items, onChange }: TabProps) {
  const { activeIndex, setActiveIndex } = useTab(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className={styles['tab-wrap']}>
      <div className={styles['tab-list']} role="tablist">
        {items.map((item, index) => (
          <button
            key={item}
            role="tab"
            aria-selected={activeIndex === index}
            className={[
              styles['tab-item'],
              activeIndex === index ? styles['tab-item-active'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
