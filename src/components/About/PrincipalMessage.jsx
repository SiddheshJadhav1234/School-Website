import React from "react";

const PrincipalMessage = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* CENTER WRAPPER */}
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* IMAGE */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-amber-400 blur-xl opacity-30"></div>

            <img
              src="https://news.globalindianschool.org/content/thumbnail/Ms-Vandana-Midha_FI1x.jpg"
              alt="Principal"
              className="relative w-72 h-80 object-cover rounded-3xl
                         shadow-xl border-4 border-white"
            />
          </div>

          {/* CONTENT */}
          <div className="bg-amber-50 rounded-3xl p-8 md:p-10
                          shadow-xl border border-amber-200
                          max-w-xl text-center md:text-left">

            <span className="inline-block text-xs tracking-widest font-semibold
                             text-amber-600 bg-amber-100 px-4 py-1
                             rounded-full mb-4">
              PRINCIPAL’S MESSAGE
            </span>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Guiding Young Minds with Care
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              “At M.M. Vidya Mandir, education goes beyond textbooks. We nurture
              character, confidence, and curiosity. Every child is encouraged
              to explore, learn, and grow in a safe and joyful environment.”
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-amber-700">
                Mrs. Sunita Sharma
              </h3>
              <p className="text-gray-600">
                Principal, M.M. Vidya Mandir Primary School
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;
