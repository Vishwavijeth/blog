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

const navLinks = [
  { href: "/", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/me", label: "About" },
];

const socialLinks = [
  {
    href: "https://github.com/Vishwavijeth",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "http://www.linkedin.com/in/vishwavijeth-v",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      {/* Ambient background visuals */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px] animate-blob" />
        <div
          className="absolute top-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-[140px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen px-6 sm:px-10 lg:px-16 xl:px-24 py-6">
        {/* Navbar */}
        <header className="sticky top-6 z-30">
          <div className="glass-panel flex flex-wrap items-center gap-4 px-6 py-4 md:flex-nowrap md:gap-8">
            <a
              href="/"
              className="text-xl sm:text-2xl font-semibold tracking-tight flex-none"
            >
              Vishwa<span className="text-cyan-400">'</span>s Blog
            </a>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="group relative transition hover:text-cyan-200"
                >
                  <span>{link.label}</span>
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="ml-auto hidden md:flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="rounded-full border border-white/20 p-2 text-lg text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-2xl p-2 rounded-full border border-white/20"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mt-4 glass-panel px-6 py-6 md:hidden animate-fade-in">
              <nav className="flex flex-col space-y-4 text-base font-medium">
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-200 hover:text-cyan-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex flex-1 items-center justify-center rounded-full border border-white/20 p-3 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto py-12 animate-fade-in">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12">
          <div className="glass-panel flex flex-col items-center justify-between gap-6 px-6 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                Stay connected
              </p>
              <p className="text-base text-slate-100">
                Crafted with curiosity © {currentYear}
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xl text-slate-100">
              <a
                href="mailto:vichucoding@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
                className="transition hover:text-cyan-300"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/Vishwavijeth"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="transition hover:text-cyan-300"
              >
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/vishwavijeth-v"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="transition hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
