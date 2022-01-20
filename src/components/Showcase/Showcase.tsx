import React, { useState, ReactElement } from "react";
import { Link } from "react-router-dom";
import './style.css';

interface Props {
  title: string,
}

export default function Showcase({title}: Props): ReactElement {
  const [movies, setMovies] = useState([
    {
      title: "Crazy kittens",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Crazy kittens 2",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
  ]);

  return (
    <div className="showcase mb-8">
      <h2 className="showcase__title font-semibold text-lg lg:text-xl mb-2">
        {title}
      </h2>

      <ul
        className="showcase__list flex space-x-2 overflow-x-scroll"
      >
        {movies.map((movie, index) => (
          <li key={index} className="w-[40vw] shrink-0">
            <Link to="/">
              <img src={movie.image} alt="" />
              <span className="block text-center">{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
