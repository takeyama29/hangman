import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

const dummyText = `日本語のダミー文章がここに入ります。本文は縦書きで表示され、右から左へページをめくることができます。`;

const pages = [dummyText, dummyText, dummyText];

const VerticalBook: FC = () => {
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
      {pages.map((text, index) => (
        <SwiperSlide key={index}>
          <div
            className="p-8 text-xl leading-relaxed"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalBook;
