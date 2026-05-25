import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-4 mt-4 py-4 px-4 container mx-auto">
      <div></div>
      <ul className="flex items-center gap-4 text-gray-700">
        <li>
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link href="/career" className="">
            Career
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Image src={image} alt="User avatar" width={50} height={50} />
        <button className="btn bg-[#404040] text-white">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
