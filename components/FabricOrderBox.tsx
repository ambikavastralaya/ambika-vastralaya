"use client";

import { useState } from "react";

export default function FabricOrderBox(props: {
  title: string;
}) {
  const [meters, setMeters] = useState("");

  const whatsappLink = `https://wa.me/918955174687?text=${encodeURIComponent(
    `Hi, I am interested in ${props.title}. Required Length: ${meters || "Not specified"} Meter. Please share price and details.`
  )}`;

  return (
    <div className="mt-8 rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-6">
      <h3 className="text-xl font-bold text-yellow-300">
        Fabric Length Requirement
      </h3>

      <p className="mt-2 text-sm text-yellow-100">
        Enter the required fabric length in meters.
      </p>

      <input
        type="number"
        min="1"
        step="0.5"
        value={meters}
        onChange={(e) => setMeters(e.target.value)}
        placeholder="Example: 5"
        className="mt-4 w-full rounded-2xl border border-yellow-400 bg-[#3b0a0a] px-4 py-3 text-white outline-none"
      />

      <a
        href={whatsappLink}
        target="_blank"
        className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-3 font-bold text-black"
      >
        Enquire on WhatsApp
      </a>
    </div>
  );
}