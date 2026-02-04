"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside navbar area
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#f7f6f3]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">

        {/* TOP BAR */}
        <div className="h-20 flex items-center justify-between">

          {/* BRAND LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/images/logo/pmk-logo.png" // your PNG with name included
              alt="Punjab Modular Kitchen"
              width={200}
              height={55}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm text-[#555]">
            <Link href="/kitchens" className="hover:text-black">
              Kitchens
            </Link>
            <Link href="/process" className="hover:text-black">
              Process
            </Link>
            <Link href="/blog" className="hover:text-black">
              Blogs
            </Link>

            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link
              href="/contact"
              className="ml-4 border border-black/80 px-6 py-2
              hover:bg-black hover:text-white transition"
            >
              Consultation
            </Link>
          </div>

          {/* Hamburger / Close */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {/* Line 1 */}
            <span
              className={`absolute w-6 h-[1.5px] bg-black transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            {/* Line 2 */}
            <span
              className={`absolute w-6 h-[1.5px] bg-black transition-all duration-300
              ${open ? "opacity-0" : ""}`}
            />
            {/* Line 3 */}
            <span
              className={`absolute w-6 h-[1.5px] bg-black transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-black/10 py-10">
            <div className="flex flex-col gap-6 text-sm text-[#555]">

              <Link href="/kitchens" onClick={() => setOpen(false)}>
                Kitchens
              </Link>
              <Link href="/process" onClick={() => setOpen(false)}>
                Process
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blogs
              </Link>
              {/* <Link href="/materials" onClick={() => setOpen(false)}>
                Materials
              </Link> */}
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-6 border border-black/80 px-6 py-2
                text-black w-fit hover:bg-black hover:text-white transition"
              >
                Consultation
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
