"use client";
import React from "react";
import Link from "next/link";
import Form from "next/form";

const RegisterPage = () => {
  return (
    <div className="flex flex-col bg-[#f3f4f6]">
      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-10">
        <div className="bg-white w-full max-w-125 p-8 shadow-sm rounded-sm">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-[#3b3b3b] mb-6">
            Register your account
          </h2>

          {/* Divider */}
          <hr className="border-gray-200 mb-6" />

          <Form action="/register-endpoint">
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#3b3b3b] font-bold mb-2 text-base"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-[#f3f4f6] p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-[#3b3b3b] font-bold mb-2 text-base"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photoUrl"
                id="photoUrl"
                placeholder="Enter your photo URL"
                className="w-full bg-[#f3f4f6] p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#3b3b3b] font-bold mb-2 text-base"
              >
                Email
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

            {/* Terms and Conditions Checkbox */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="w-4 h-4 mr-3 rounded border-gray-300 text-[#404040] focus:ring-[#404040]"
                required
              />
              <label
                htmlFor="terms"
                className="text-[#737373] font-medium text-sm cursor-pointer"
              >
                Accept{" "}
                <span className="font-bold text-[#404040]">
                  Term & Conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#404040] text-white font-bold text-base py-3 rounded hover:bg-[#2d2d2d] transition-colors"
            >
              Register
            </button>
          </Form>

          <p className="text-center mt-6 text-[#737373] font-semibold text-sm">
            Already Have An Account ?{" "}
            <Link href="/login" className="text-[#f05252] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
