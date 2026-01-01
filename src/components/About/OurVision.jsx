import React, { useEffect, useRef, useState } from "react";

const OurVision = () => {
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
    <section ref={ref} className="py-20 px-6 md:px-16 bg-white">
      <div
        className={`max-w-5xl mx-auto rounded-3xl p-10 md:p-14
        bg-amber-50 shadow-xl border border-amber-200
        transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* TOP LABEL */}
        <span
          className="inline-block mb-4 text-xs tracking-widest font-semibold
                     text-amber-700 bg-amber-100 px-4 py-1 rounded-full"
        >
          OUR GOAL
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Our <span className="text-amber-600">Vision</span>
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-4 h-1 w-16 bg-amber-500 rounded-full"></div>

        {/* MAIN CONTENT */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl">
          We envision a future where our students grow into{" "}
          <span className="font-semibold text-gray-900">
            confident, compassionate, and responsible
          </span>{" "}
          individuals who are prepared for lifelong learning, leadership,
          and positive contribution to society.
        </p>

        {/* HIGHLIGHT BOXES */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Confident Learners",
            "Responsible Citizens",
            "Lifelong Growth",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-amber-50 border 
                         rounded-xl px-6 py-4 text-center
                         text-gray-700 font-medium
                         shadow-sm
                         hover:shadow-lg
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
