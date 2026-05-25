import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#403F3F]">
      <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded bg-[#D72050] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              Error 404
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              News Article <br /> Not Found
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
              The page you are looking for may have been removed, renamed,
              or is temporarily unavailable.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded bg-[#403F3F] px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-black"
              >
                Back To Home
              </Link>

              <Link
                href="/"
                className="rounded border border-[#D72050] px-8 py-3 font-semibold text-[#D72050] transition duration-300 hover:scale-105 hover:bg-[#D72050] hover:text-white"
              >
                All News
              </Link>
            </div>

            {/* Small Stats */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="rounded-xl bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-[#D72050]">24/7</h3>
                <p className="mt-1 text-sm text-gray-500">Live Coverage</p>
              </div>

              <div className="rounded-xl bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-[#D72050]">120+</h3>
                <p className="mt-1 text-sm text-gray-500">Daily Articles</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center">
            {/* Background Cards */}
            <div className="absolute -left-4 top-10 hidden h-72 w-56 rotate-[-8deg] rounded-2xl bg-white shadow-lg md:block"></div>

            <div className="absolute -right-4 bottom-10 hidden h-72 w-56 rotate-[8deg] rounded-2xl bg-white shadow-lg md:block"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-xl">
              {/* Top Banner */}
              <div className="bg-[#403F3F] p-6 text-white">
                <p className="text-sm uppercase tracking-widest text-gray-300">
                  Dragon News
                </p>

                <h4 className="mt-2 text-3xl font-bold">404</h4>

                <p className="mt-2 text-sm text-gray-300">
                  Stay Updated With Real-Time Headlines
                </p>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-sm text-gray-400">Breaking News</p>

                    <h3 className="text-xl font-bold">
                      This page cannot be found
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D72050]/10 text-2xl font-bold text-[#D72050]">
                    !
                  </div>
                </div>

                {/* Fake News Blocks */}
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl bg-[#F3F3F3] p-4">
                    <div className="mb-2 h-3 w-24 rounded bg-[#D72050]"></div>
                    <div className="h-3 w-full rounded bg-gray-300"></div>
                  </div>

                  <div className="rounded-xl bg-[#F3F3F3] p-4">
                    <div className="mb-2 h-3 w-16 rounded bg-[#D72050]"></div>
                    <div className="h-3 w-5/6 rounded bg-gray-300"></div>
                  </div>

                  <div className="rounded-xl bg-[#F3F3F3] p-4">
                    <div className="mb-2 h-3 w-20 rounded bg-[#D72050]"></div>
                    <div className="h-3 w-4/6 rounded bg-gray-300"></div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 rounded-2xl bg-[#F3F3F3] p-5">
                  <p className="text-sm text-gray-500">
                    Continue exploring the latest articles and breaking stories
                    from around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;