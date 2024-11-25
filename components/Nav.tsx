"use client";

import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname(); // Get the current path from Next.js navigation

  return (
    <nav className="bg-gray-200 flex items-center justify-between px-20 h-[80px] shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="We5ive Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Deals", href: "/deals" },
          { label: "What's New", href: "/whats-new" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-gray-600 hover:text-gray-800 ${
              pathname === link.href ? "text-purple-600 font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 px-2 py-1 bg-white rounded-full">
          <CiSearch className="text-xl text-black" />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block text-sm outline-none text-black"
          />
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <TbShoppingBag size={30} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaRegUser size={24} />
        </button>
      </div>
    </nav>
  );
}
