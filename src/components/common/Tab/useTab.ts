import { useState } from 'react';

export function useTab(initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  return { activeIndex, setActiveIndex };
}
