"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, HeartPulse, Lock, Mail, User } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Check passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to create account.");
        return;
      }

      setSuccess("Account created successfully! You can now login.");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen overflow-hidden bg-slate-50">
      <header className="fixed left-0 right-0 top-0 z-[100] h-[64px] border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <HeartPulse size={20} />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-tight text-slate-900">
                CareFlow
              </h1>
              <p className="text-[9px] text-slate-500">
                Healthcare Management
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={13} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="flex h-screen items-center justify-center px-4 pt-[64px]">
        <div className="w-full max-w-[340px]">
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="mb-2.5 flex justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <HeartPulse size={20} />
              </div>
            </div>

            <div className="mb-3 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                Create Account
              </h2>

              <p className="mt-0.5 text-[11px] text-slate-500">
                Create your CareFlow account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-[11px] font-medium text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="h-8 w-full rounded-md border border-slate-300 py-1 pl-8 pr-3 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[11px] font-medium text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="h-8 w-full rounded-md border border-slate-300 py-1 pl-8 pr-3 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-[11px] font-medium text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    minLength={6}
                    className="h-8 w-full rounded-md border border-slate-300 py-1 pl-8 pr-3 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-[11px] font-medium text-slate-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    required
                    minLength={6}
                    className="h-8 w-full rounded-md border border-slate-300 py-1 pl-8 pr-3 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  />
                </div>
              </div>

              <p className="text-[9px] text-slate-400">
                Password must contain at least 6 characters.
              </p>

              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-2.5 py-2 text-[10px] text-red-600">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-md border border-green-200 bg-green-50 px-2.5 py-2 text-[10px] text-green-600">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-8 w-full rounded-md bg-blue-600 text-[11px] font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-3 border-t border-slate-100 pt-2.5 text-center">
              <p className="text-[11px] text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>

          <p className="mt-1.5 text-center text-[9px] text-slate-400">
            Your account information is securely protected by CareFlow.
          </p>
        </div>
      </section>
    </main>
  );
}