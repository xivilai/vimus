import React, { ReactElement, useRef, useState } from "react";
import "./style.css";

import ShowcaseItem, { ShowcaseItemPlaceholder } from "./ShowcaseItem";
import { IShow } from "../Show";

interface Props {
  shows: Array<IShow>;
  title: string;
}

export default function Showcase({ shows, title }: Props): ReactElement {
  const showcaseListRef = useRef<HTMLUListElement>(null);
  const scrollOffset = 900;

  const scrollRight = () => {
    if (showcaseListRef.current) {
      showcaseListRef.current.scrollLeft += scrollOffset;
    }
  };

  const scrollLeft = () => {
    if (showcaseListRef.current) {
      showcaseListRef.current.scrollLeft -= scrollOffset;
    }
  };

  // Show skeletons if no shows available
  const showcaseItemPlaceholders = Array(6).fill('x').map((el, i) => <ShowcaseItemPlaceholder key={i} />);

  return (
    <div className="showcase relative mb-8">
      <h2 className="showcase__title font-semibold text-lg lg:text-xl mb-2 capitalize">
        {title}
      </h2>

      <button
        className={`absolute top-0 left-0 text-[#ff0000] w-[30px] flex items-center h-full ${
          shows.length === 0 && "hidden"
        }`}
        onClick={scrollLeft}
      >
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"
          ></path>
        </svg>
      </button>

      <ul
        ref={showcaseListRef}
        className="showcase__list flex space-x-2 overflow-x-scroll scroll-smooth"
      >
        {shows.length === 0 && showcaseItemPlaceholders}

        {shows.map((show, index) => (
          <ShowcaseItem
            key={index}
            id={show.id}
            title={show.title}
            image={show.image}
          />
        ))}
      </ul>

      <button
        className={`absolute top-0 right-0 text-[#ff0000] w-[30px] rotate-180 flex items-center h-full ${
          shows.length === 0 && "hidden"
        }`}
        onClick={scrollRight}
      >
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
