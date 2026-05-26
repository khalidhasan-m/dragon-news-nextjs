"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log("User Session:", user);

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
      {isPending ? (
        <span className="loading loading-spinner text-success"></span>
      ) : user ? (
        <div className="flex items-center gap-4">
          <h2> HELLO!! {user?.name}</h2>
          <Image
            src={user?.image || avatar}
            alt="User avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <button
            className="btn bg-[#404040] text-white"
            onClick={async () => await authClient.signOut()}
          >
            <Link href="/">Logout</Link>
          </button>
        </div>
      ) : (
        <button className="btn bg-[#404040] text-white">
          <Link href="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
