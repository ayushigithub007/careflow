"use client";

import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

const records = [
  {
    id: 1,
    patient: "Aarav Sharma",
    doctor: "Dr. Sarah Johnson",
    diagnosis: "Routine Cardiac Checkup",
    date: "24 Sep 2026",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Priya Verma",
    doctor: "Dr. Michael Smith",
    diagnosis: "Migraine",
    date: "23 Sep 2026",
    status: "Completed",
  },
  {
    id: 3,
    patient: "Rahul Singh",
    doctor: "Dr. James Anderson",
    diagnosis: "Blood Pressure",
    date: "22 Sep 2026",
    status: "Under Review",
  },
  {
    id: 4,
    patient: "Ananya Gupta",
    doctor: "Dr. Emily Williams",
    diagnosis: "Skin Allergy",
    date: "21 Sep 2026",
    status: "Completed",
  },
];

export default function MedicalRecordsPage() {
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

      {/* Page Content */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-[92px]">
        {/* Page Heading */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Medical Records
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              View and manage patient medical records
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
            + Add Record
          </button>
        </div>

        {/* Search */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search patient, doctor, or diagnosis..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Records Table */}
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Patient
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Doctor
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Diagnosis
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Date
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-medium text-sm text-slate-900">
                      {record.patient}
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {record.doctor}
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {record.diagnosis}
                    </td>

                    <td className="px-5 py-3 text-sm text-slate-600">
                      {record.date}
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          record.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {record.status}
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