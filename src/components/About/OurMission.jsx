import React, { useEffect, useRef, useState } from "react";

const OurMission = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-16 bg-white"
    >
      <div
        className={`max-w-5xl mx-auto rounded-3xl p-10 md:p-14
        bg-amber-50 shadow-xl border border-amber-100
        transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* TOP LABEL */}
        <span className="inline-block mb-4 text-xs tracking-widest font-semibold
                         text-amber-600 bg-amber-100 px-4 py-1 rounded-full">
          OUR PURPOSE
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Our <span className="text-amber-600">Mission</span>
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-4 h-1 w-16 bg-amber-500 rounded-full"></div>

        {/* CONTENT */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl">
          Our mission is to provide a{" "}
          <span className="font-semibold text-gray-900">
            safe, inclusive and joyful
          </span>{" "}
          environment where children develop strong academic foundations,
          moral values, creativity, and lifelong curiosity—preparing them
          confidently for the future.
        </p>

        {/* OPTIONAL HIGHLIGHTS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Safe & Caring Campus",
            "Strong Moral Values",
            "Joyful Learning",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-amber-50 border
                         rounded-xl px-5 py-4 text-center text-gray-700
                         font-medium shadow-sm hover:shadow-md
                         transition-all duration-300 hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;

