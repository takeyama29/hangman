import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { splitPages } from '../lib/splitPages';
import { createDummyData } from '../lib/dummyData';

/**
 * PageSwiper renders vertical pages inside a Swiper component.
 * It accepts optional text and page size, splitting content into Swiper slides.
 */
export interface PageSwiperProps {
  /** Source text to be displayed. */
  text?: string;
  /** Maximum characters per page. */
  pageSize?: number;
}

export const PageSwiper: React.FC<PageSwiperProps> = ({
  text = createDummyData(400),
  pageSize = 100,
}) => {
  const pages = React.useMemo(() => splitPages(text, pageSize), [text, pageSize]);

  return (
    <Swiper direction="vertical">
      {pages.map((page, index) => (
        <SwiperSlide key={index}>
          <div style={{ writingMode: 'vertical-rl' }}>{page}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PageSwiper;
