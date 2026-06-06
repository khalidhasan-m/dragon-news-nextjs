import React from "react";

const About = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="bg-[#D72050] text-white px-4 py-2 rounded text-sm font-semibold uppercase">
          About Us
        </span>

        <h1 className="mt-6 text-5xl font-bold text-[#403F3F]">
          Delivering News With Integrity
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-500">
          Dragon News is committed to providing accurate, timely, and
          unbiased journalism. Our mission is to keep readers informed
          about the stories that matter most, from local events to
          global developments.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#403F3F] mb-4">
              Our Mission
            </h2>

            <p className="text-gray-500 leading-relaxed">
              To empower people with reliable information, foster
              informed discussions, and uphold the highest standards
              of journalism in the digital age.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#403F3F] mb-4">
              Our Vision
            </h2>

            <p className="text-gray-500 leading-relaxed">
              To become one of the most trusted news platforms,
              delivering impactful stories that educate, inspire,
              and connect communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-6 text-center md:grid-cols-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-[#D72050]">10M+</h3>
            <p className="mt-2 text-gray-500">Monthly Readers</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-[#D72050]">120+</h3>
            <p className="mt-2 text-gray-500">Articles Daily</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-[#D72050]">50+</h3>
            <p className="mt-2 text-gray-500">Journalists</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-[#D72050]">24/7</h3>
            <p className="mt-2 text-gray-500">News Coverage</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Accuracy</h3>
            <p className="text-gray-500">
              We verify facts and provide trustworthy reporting.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Transparency</h3>
            <p className="text-gray-500">
              We maintain openness and accountability in our work.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Independence</h3>
            <p className="text-gray-500">
              We report without fear, favor, or external influence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;