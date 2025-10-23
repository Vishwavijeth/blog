"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen px-12 sm:px-16 lg:px-24 xl:px-32 py-6 bg-white text-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="font-bold text-2xl">
          Vishwa's blog
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 pr-12 lg:pr-16 text-base font-medium font-sans tracking-wide">
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          <Link href="/tags" className="hover:underline">
            Tags
          </Link>
          <Link href="/me" className="hover:underline">
            About
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex flex-col items-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 py-2 text-base font-medium font-sans tracking-wide">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/tags"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Tags
          </Link>
          <Link
            href="/me"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full py-15 mt-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center mt-auto py-6">
        <div className="flex justify-center space-x-6 mb-2 text-xl">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Vishwavijeth"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/vishwavijeth-v"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-gray-600">Vishwavijeth © {currentYear}</p>
      </footer>
    </div>
  );
}
