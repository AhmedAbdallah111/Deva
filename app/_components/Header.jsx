"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../Public/images/logo-png.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const currentPath = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "الصفحه الريئسية" },
    { href: "/universitys", label: "جامعتنا" },
    { href: "/khadamat", label: "خدامتنا" },
    { href: "/takass", label: "جميع التخصصات" },
    { href: "/mannahno", label: "من نحن" },
    { href: "/KonWakelna", label: "كن وكيلنا" },
    { href: "/madonatna", label: "مدونتنا" },
  ];
  return (
    <header className="bg-fuchsia-800 shadow-md  fixed w-full z-50 max-sm:min-w-[80rem] max-sm:w-[80rem] max-lg:w-[80rem] max-sm:absolute max-lg:absolute">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation Section */}
          <nav className="hidden lg:flex gap-6 text-2xl font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  currentPath === link.href
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                } px-2 py-1`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/search"
              className="px-4 py-2 bg-yellow-500 text-fuchsia-800  rounded-2xl mr-6 font-bold hover:bg-yellow-600 transition-colors duration-200"
              onClick={() => console.log("تسجيل الدخول")}
            >
              تسجيل
            </a>
          </nav>

          {/* Mobile Menu Button (Visible on medium and small screens) */}
          <div className="lg:hidden flex items-center relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-gray-100 rounded text-gray-600"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-14 left-0 w-[15rem] bg-fuchsia-800 text-white font-bold shadow-lg z-50 "
              >
                <nav className="flex flex-col gap-4 text-center text-xl p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`p-2 rounded transition-colors duration-200 no-underline ${
                        currentPath === link.href
                          ? "text-yellow-500"
                          : "hover:text-yellow-500 hover:bg-fuchsia-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <a
                    href="/search"
                    className="w-full p-2 rounded bg-yellow-500 text-fuchsia-800 font-bold hover:bg-yellow-600 transition-colors duration-200"
                    onClick={() => console.log("تسجيل الدخول")}
                  >
                    تسجيل
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
