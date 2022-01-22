import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Categories(): ReactElement {
  const links = [
    {
      label: "Action",
      to: "/genre/action",
    },
    {
      label: "Horror",
      to: "/genre/horror",
    },
    {
      label: "Adventure",
      to: "/genre/adventure",
    },
    {
      label: "Musical",
      to: "/genre/musical",
    },
    {
      label: "Comedy",
      to: "/genre/comedy",
    },
    {
      label: "Black Comedy",
      to: "/genre/black-comedy",
    },
    {
      label: "Science Fiction Films",
      to: "/genre/science-fiction",
    },
  ];

  return (
    <ul className="flex whitespace-nowrap px-3 space-x-5 pb-3 mb-5 font-semibold overflow-x-scroll">
      {links.map((lnk) => (
        <Link to={lnk.to}>{lnk.label}</Link>
      ))}
    </ul>
  );
}
