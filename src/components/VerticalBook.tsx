'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

interface VerticalBookProps {
  pages: ReactNode[];
}

export default function VerticalBook({ pages }: VerticalBookProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation, EffectCreative]}
      pagination={{ clickable: true }}
      navigation
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      className="w-full h-screen"
      dir="rtl"
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index}>{page}</SwiperSlide>
      ))}
    </Swiper>
  );
}

