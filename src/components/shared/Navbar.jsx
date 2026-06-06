"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import avatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  return (
    <div className="container mx-auto mt-4 flex items-center justify-between gap-4 px-4 py-4">
      <div></div>

      <ul className="flex items-center gap-6 text-gray-700">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#D72050] border-b-2 border-[#D72050] pb-1"
                  : "hover:text-[#D72050]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {isPending ? (
        <span className="loading loading-spinner text-success"></span>
      ) : user ? (
        <div className="flex items-center gap-4">
          <h2>Hello!! {user.name}</h2>

          <Image
            src={user.image || avatar}
            alt="User avatar"
            width={50}
            height={50}
            className="rounded-full"
          />

          <button
            className="btn bg-[#404040] text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login" className="btn bg-[#404040] text-white">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;