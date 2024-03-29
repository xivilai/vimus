import React from "react";

type Props = {};

export default function Subscribe({}: Props) {
  return (
    <section
      id="subscribe"
      className="flex flex-wrap gap-2 md:my-16 text-center justify-center space-x-3 my-8"
    >
      <h2 className="w-full text-xl md:text-2xl">Subscribe to our newsletter</h2>
      <input
        type="email"
        placeholder="your email"
        className="p-2 text-black font-semibold md:w-[300px]"
      />
      <button className="border-2 border-white py-2 px-4">Subscribe</button>
    </section>
  );
}
