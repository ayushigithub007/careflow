import Link from "next/link";
import {
  Users,
  CalendarDays,
  Stethoscope,
  FileText,
  UserPlus,
  CalendarPlus,
  ClipboardList,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Patients",
    href: "/patients",
  },
  {
    name: "Doctors",
    href: "/doctors",
  },
  {
    name: "Appointments",
    href: "/appointments",
  },
  {
    name: "Medical Records",
    href: "/medical-records",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-slate-200 bg-white md:flex md:flex-col">

          {/* Logo */}
          <div className="border-b border-slate-200 px-6 py-5">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600"
            >
              CareFlow
            </Link>

            <p className="mt-1 text-xs text-slate-500">
              Clinic Management
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="border-t border-slate-200 p-4">
            <button
              type="button"
              className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">

          {/* Top Bar */}
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-6 py-4">

              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Dashboard
                </h1>

                <p className="text-sm text-slate-500">
                  Welcome back to CareFlow
                </p>
              </div>

              <div className="flex items-center gap-3">

                <div className="hidden text-right sm:block">
                  <p className="text-sm font-medium text-slate-900">
                    Clinic Administrator
                  </p>

                  <p className="text-xs text-slate-500">
                    Administrator
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  A
                </div>

              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <section className="p-6">

            {/* Statistics */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {/* Total Patients */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Total Patients
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      128
                    </p>

                    <p className="mt-2 text-sm text-green-600">
                      +12% this month
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Users size={24} />
                  </div>

                </div>
              </div>

              {/* Appointments */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Appointments Today
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      24
                    </p>

                    <p className="mt-2 text-sm text-blue-600">
                      7 pending
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <CalendarDays size={24} />
                  </div>

                </div>
              </div>

              {/* Doctors */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Total Doctors
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      12
                    </p>

                    <p className="mt-2 text-sm text-green-600">
                      9 available today
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <Stethoscope size={24} />
                  </div>

                </div>
              </div>

              {/* Medical Records */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Medical Records
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      356
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Updated recently
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <FileText size={24} />
                  </div>

                </div>
              </div>

            </div>

            {/* Lower Section */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              {/* Quick Actions */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-semibold text-slate-900">
                  Quick Actions
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {/* Add Patient */}
                  <Link
                    href="/patients"
                    className="group flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-4 text-white transition hover:bg-blue-700"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                      <UserPlus size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Add Patient
                      </p>

                      <p className="text-xs text-blue-100">
                        Register a new patient
                      </p>
                    </div>
                  </Link>

                  {/* Book Appointment */}
                  <Link
                    href="/appointments"
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-4 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <CalendarPlus size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Book Appointment
                      </p>

                      <p className="text-xs text-slate-500">
                        Schedule a new visit
                      </p>
                    </div>
                  </Link>

                  {/* View Doctors */}
                  <Link
                    href="/doctors"
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-4 transition hover:border-purple-200 hover:bg-purple-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                      <Stethoscope size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        View Doctors
                      </p>

                      <p className="text-xs text-slate-500">
                        Browse available doctors
                      </p>
                    </div>
                  </Link>

                  {/* Medical Records */}
                  <Link
                    href="/medical-records"
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-4 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <ClipboardList size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Medical Records
                      </p>

                      <p className="text-xs text-slate-500">
                        View patient records
                      </p>
                    </div>
                  </Link>

                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-semibold text-slate-900">
                  Recent Activity
                </h2>

                <div className="mt-5 space-y-5">

                  <div className="border-b border-slate-100 pb-4">
                    <p className="text-sm font-medium text-slate-800">
                      New patient registered
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      10 minutes ago
                    </p>
                  </div>

                  <div className="border-b border-slate-100 pb-4">
                    <p className="text-sm font-medium text-slate-800">
                      Appointment confirmed
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      35 minutes ago
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Medical record updated
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      1 hour ago
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}