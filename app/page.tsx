import Link from "next/link";
import {
  CalendarCheck,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  UserRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <HeartPulse size={25} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          CareFlow
        </h1>
        <p className="text-xs text-slate-500">
          Healthcare Management
        </p>
      </div>
    </Link>

    <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
      <Link href="/" className="text-blue-600">
        Home
      </Link>

      <Link href="/doctors" className="transition hover:text-blue-600">
        Doctors
      </Link>

      <Link
        href="/appointments"
        className="transition hover:text-blue-600"
      >
        Appointments
      </Link>

      <Link
        href="/medical-records"
        className="transition hover:text-blue-600"
      >
        Medical Records
      </Link>
    </nav>

    <Link
      href="/dashboard"
      className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
    >
      Dashboard
    </Link>
  </div>
</header>

      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* Hero content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <ShieldCheck size={17} />
              Secure & Trusted Healthcare Platform
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthcare made{" "}
              <span className="text-blue-600">simple, secure,</span> and
              connected.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CareFlow brings patients, doctors, and clinic administrators
              together in one secure platform for appointments, consultations,
              and medical records.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/doctors"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <Stethoscope size={18} />
                Find a Doctor
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Secure patient data
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Easy appointment booking
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Centralized records
              </span>
            </div>
          </div>

          {/* Hero dashboard preview */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70">
              {/* Preview header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm text-slate-500">Patient Dashboard</p>
                  <h3 className="mt-1 font-semibold text-slate-900">
                    Welcome to CareFlow
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <UserRound size={20} />
                </div>
              </div>

              {/* Appointment card */}
              <div className="mt-5 rounded-2xl bg-blue-600 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-100">
                      Upcoming Appointment
                    </p>
                    <h4 className="mt-1 text-lg font-semibold">
                      Dr. Sarah Johnson
                    </h4>
                    <p className="mt-1 text-sm text-blue-100">
                      Cardiologist
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/15 p-3">
                    <CalendarCheck size={24} />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-white/20 pt-4 text-sm">
                  <span className="flex items-center gap-2">
                    <CalendarCheck size={16} />
                    Tomorrow
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    10:30 AM
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Appointments
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">08</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Medical Records
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">04</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Prescriptions
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-3">
                <ShieldCheck className="text-green-600" size={20} />

                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Your health data is protected
                  </p>
                  <p className="text-xs text-green-700">
                    Secure access to your healthcare information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Healthcare at your fingertips
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to manage your care
            </h2>

            <p className="mt-4 text-slate-600">
              A connected healthcare experience designed for patients,
              doctors, and clinic teams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={<CalendarCheck size={25} />}
              title="Easy Appointments"
              description="Find available doctors and manage your appointments from one place."
            />

            <ServiceCard
              icon={<Stethoscope size={25} />}
              title="Trusted Doctors"
              description="Explore doctor profiles, specializations, and consultation information."
            />

            <ServiceCard
              icon={<ShieldCheck size={25} />}
              title="Secure Records"
              description="Keep important medical information organized and accessible when you need it."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <HeartPulse size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Take control of your healthcare journey
            </h2>

            <p className="mt-4 text-slate-300">
              Manage appointments, doctors, and medical information through
              one secure healthcare platform.
            </p>

            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <HeartPulse size={18} className="text-blue-600" />
            CareFlow
          </div>

          <p>
            © {new Date().getFullYear()} CareFlow. Secure Clinic Management
            Platform.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
