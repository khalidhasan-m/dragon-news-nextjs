import React from "react";

const Career = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="bg-[#D72050] text-white px-4 py-2 rounded text-sm font-semibold uppercase">
          Join Our Team
        </span>

        <h1 className="mt-6 text-5xl font-bold text-[#403F3F]">
          Build the Future of News
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg">
          At Dragon News, we&apos;re looking for passionate journalists,
          developers, designers, and storytellers who want to make a meaningful
          impact through quality journalism.
        </p>

        <button className="mt-8 bg-[#403F3F] text-white px-8 py-3 rounded font-semibold hover:bg-black transition">
          View Open Positions
        </button>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-12">
          Why Work With Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
            <p className="text-gray-500">
              Learn, innovate, and grow your career alongside industry experts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
            <p className="text-gray-500">
              Help millions stay informed through trustworthy journalism.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">
              Collaborative Culture
            </h3>
            <p className="text-gray-500">
              Work with talented professionals in a supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-12">
          Open Positions
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-500 mt-2">Full Time • Remote</p>
            </div>

            <button className="mt-4 md:mt-0 border border-[#D72050] text-[#D72050] px-6 py-2 rounded hover:bg-[#D72050] hover:text-white transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">News Reporter</h3>
              <p className="text-gray-500 mt-2">Full Time • On Site</p>
            </div>

            <button className="mt-4 md:mt-0 border border-[#D72050] text-[#D72050] px-6 py-2 rounded hover:bg-[#D72050] hover:text-white transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-gray-500 mt-2">Full Time • Hybrid</p>
            </div>

            <button className="mt-4 md:mt-0 border border-[#D72050] text-[#D72050] px-6 py-2 rounded hover:bg-[#D72050] hover:text-white transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
