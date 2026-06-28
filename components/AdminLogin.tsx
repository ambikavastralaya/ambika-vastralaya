"use client";

import { useState } from "react";

export default function AdminLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const adminPassword = "ambika123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === adminPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Wrong password");
    }
  };

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#3b0a0a] px-6 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-8 shadow-2xl"
      >
        <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
          ADMIN LOGIN
        </p>

        <h1 className="mt-4 text-4xl font-bold text-yellow-400">
          Ambika Vastralaya
        </h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-8 w-full rounded-2xl border border-yellow-400 bg-[#3b0a0a] px-5 py-4 text-white outline-none placeholder:text-yellow-100"
        />

        {error && <p className="mt-4 text-red-400">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-4 font-bold text-black"
        >
          Login
        </button>
      </form>
    </main>
  );
}