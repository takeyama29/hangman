import React from 'react';

interface VerticalBookProps {
  pages: React.ReactNode[];
}

/**
 * A simple vertical book component that renders a series of pages.
 * Each page is rendered in a vertical stack that can be styled for
 * page turning animations.
 */
export default function VerticalBook({ pages }: VerticalBookProps) {
  return (
    <div className="vertical-book">
      {pages.map((page, index) => (
        <div key={index} className="page">
          {page}
        </div>
      ))}
    </div>
  );
}
