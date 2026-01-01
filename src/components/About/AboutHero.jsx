import React, { useEffect, useState } from "react";

const AboutHero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-linear-to-r from-amber-300 via-orange-400 to-red-500 text-white text-center px-6">
      <div
        className={`max-w-3xl transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          About M.M. Vidya Mandir
        </h1>

        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Nurturing young minds with values, confidence and joyful learning
          experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
