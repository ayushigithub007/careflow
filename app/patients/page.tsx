"use client";

import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

const patients = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 28,
    gender: "Male",
    phone: "+91 98765 43210",
    condition: "General Checkup",
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 34,
    gender: "Female",
    phone: "+91 98765 12345",
    condition: "Migraine",
  },
  {
    id: 3,
    name: "Rahul Singh",
    age: 42,
    gender: "Male",
    phone: "+91 99887 66554",
    condition: "Blood Pressure",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    age: 25,
    gender: "Female",
    phone: "+91 91234 56789",
    condition: "Skin Allergy",
  },
];

export default function PatientsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-[100] h-[68px] border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* CareFlow Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <HeartPulse size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                CareFlow
              </h1>

              <p className="text-[10px] text-slate-500">
                Healthcare Management
              </p>
            </div>
          </Link>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-[92px]">
        {/* Page Heading */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Patients
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage and view patient information
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
            + Add Patient
          </button>
        </div>

        {/* Search */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Patient Table */}
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Patient
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Age
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Gender
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Phone
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Condition
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                          {patient.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <span className="text-sm font-medium text-slate-900">
                          {patient.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {patient.age}
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {patient.gender}
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {patient.phone}
                    </td>

                    <td className="px-5 py-3">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                        {patient.condition}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <button className="text-sm font-medium text-blue-600 transition hover:text-blue-800">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}