# Hangman

This project showcases a simple vertical text reader built with React and [Swiper](https://swiperjs.com/).

## Vertical layout

Pages are displayed in a Japanese-style vertical layout by applying CSS `writing-mode: vertical-rl` to the text container. This rotates the flow of characters so they are read from top to bottom and right to left.

## Swiper settings

`PageSwiper` uses Swiper's React component with `direction="vertical"` so users can swipe up or down between pages. Each page is a `SwiperSlide`.

## Directory structure

```
src/
  components/
    App.tsx          # Root component.
    PageSwiper.tsx   # Renders paginated vertical text using Swiper.
  lib/
    splitPages.ts    # Splits a string into fixed-length pages.
    dummyData.ts     # Generates placeholder text for the demo.
```

## Usage

Install dependencies and run the development server:

```bash
npm install
npm start
```
