"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Bridal", href: "/collections/bridal" },
    { name: "Work Odhani", href: "/collections/work-odhani" },
    { name: "Poshak", href: "/collections/rajputi-poshak" },
    { name: "Sarees", href: "/collections/sarees" },
    { name: "Fabric", href: "/collections/fabric" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-yellow-500/20 bg-[#3b0a0a]/90 px-6 py-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <a href="/">
          <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
            Ambika
          </h2>

          <p className="text-xs tracking-[0.3em] text-yellow-200">
            VASTRALAYA
          </p>
        </a>

        <div className="hidden gap-8 text-sm font-medium text-yellow-100 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.me/918955174687"
            target="_blank"
            className="rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-yellow-400 px-4 py-2 text-xl font-bold text-yellow-300 md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mt-5 rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-5 md:hidden">
          <div className="flex flex-col gap-4 text-yellow-100">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold transition hover:bg-yellow-400 hover:text-black"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/918955174687"
              target="_blank"
              className="mt-2 rounded-full bg-yellow-400 px-5 py-3 text-center font-bold text-black"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}