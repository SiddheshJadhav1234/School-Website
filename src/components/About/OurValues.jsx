import React, { useEffect, useRef, useState } from "react";

const values = [
  { title: "Quality Education", desc: "Strong academic and practical learning." },
  { title: "Child Safety", desc: "Safe, caring and supportive environment." },
  { title: "Discipline & Values", desc: "Moral values with modern education." },
  { title: "Holistic Growth", desc: "Academic, emotional and social development." },
];

const OurValues = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-2xl shadow-md border
            hover:-translate-y-2 hover:shadow-xl transition-all duration-300
            ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <h3 className="text-xl font-bold text-amber-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
