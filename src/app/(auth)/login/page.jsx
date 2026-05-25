"use client";
import Link from "next/link";
import Form from "next/form";
import React from "react";

const LoginPage = () => {
  return (
    <main
      className="container mx-auto flex items-center justify-center px-4 py-10
    grow bg-[#f3f4f6]"
    >
      <div className="bg-white w-full max-w-125 p-8 shadow-sm rounded-sm">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-[#3b3b3b] mb-6">
          Login your account
        </h2>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Next.js Form Component */}
        <Form action="/login-endpoint">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#3b3b3b] font-bold mb-2 text-base"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full bg-[#f3f4f6] p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#3b3b3b] font-bold mb-2 text-base"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-[#f3f4f6] p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#404040] text-white font-bold text-base py-3 rounded hover:bg-[#2d2d2d] transition-colors"
          >
            Login
          </button>
        </Form>

        {/* Footer Links */}
        <p className="text-center mt-6 text-[#737373] font-semibold text-sm">
          Don&apos;t Have An Account ?{" "}
          <Link href="/register" className="text-[#f05252] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
