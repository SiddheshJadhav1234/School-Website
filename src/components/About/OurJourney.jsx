import React from "react";

const OurJourney = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-xs tracking-widest text-amber-600 font-semibold bg-amber-100 px-4 py-1 rounded-full">
            SINCE 2004
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            A Legacy of <span className="text-amber-600">Trust</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            With years of dedication and commitment, our institution has grown
            into a trusted place of learning. We believe in nurturing young
            minds with care, discipline, and strong values.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {[
              {
                title: "Reliable Care",
                img: "https://i.pinimg.com/736x/8e/09/36/8e093656a87e512bc02007cd0738c4b0.jpg",
              },
              {
                title: "Safe Campus",
                img: "https://i.pinimg.com/736x/e3/d4/6c/e3d46ccc1927faf131d310606dc1a615.jpg",
              },
              {
                title: "Quality Learning",
                img: "https://i.pinimg.com/736x/b9/a8/58/b9a858ff26bc428ecf12c34ce6022324.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 text-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-45 w-full object-cover rounded-lg mb-3"
                />
                <p className="text-sm font-semibold text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center">
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden
                  w-full max-w-md md:max-w-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="Our Journey"
              className="w-full h-56 md:h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Journey
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                What started as a small initiative has today become a place
                where hundreds of children learn, grow, and dream big.
              </p>

              <div className="mt-4 flex items-center gap-3 text-amber-600 font-semibold text-sm">
                <span className="h-0.5 w-8 bg-amber-500"></span>
                <span>OUR SCHOOL STORY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
