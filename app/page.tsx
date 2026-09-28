import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Secure Clinic Management Platform
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          CareFlow
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A secure clinic management platform that helps patients book
          appointments, doctors manage consultations, and administrators
          manage clinic operations.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
              href="/doctors"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
              Explore Doctors
           </Link>
        </div>
      </section>
    </main>
  );
}