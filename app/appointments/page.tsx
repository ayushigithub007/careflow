import Link from "next/link";
import { HiH3 } from "react-icons/hi2";

const appointments = [
  {
    id: 1,
    patient: "Aarav Sharma",
    doctor: "Dr. Sarah Johnson",
    date: "24 Sep 2026",
    time: "10:00 AM",
    type: "Cardiology",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Priya Verma",
    doctor: "Dr. Michael Smith",
    date: "24 Sep 2026",
    time: "11:30 AM",
    type: "General Consultation",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Rahul Singh",
    doctor: "Dr. James Anderson",
    date: "24 Sep 2026",
    time: "01:00 PM",
    type: "Orthopedic",
    status: "Confirmed",
  },
  {
    id: 4,
    patient: "Ananya Gupta",
    doctor: "Dr. Emily Williams",
    date: "25 Sep 2026",
    time: "09:30 AM",
    type: "Dermatology",
    status: "Pending",
  },
];

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-blue-600"
          >
            CareFlow
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>


            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Schedule and manage patient appointments here.
            </h1>

          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
            + New Appointment
          </button>
        </div>

        {/* Filters */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search patient or doctor..."
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <select className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>

          <input
            type="date"
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
          />
        </div>

        {/* Appointment cards */}
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Date & Time
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Type
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">
                        {appointment.patient}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {appointment.doctor}
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {appointment.date}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {appointment.time}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {appointment.type}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          appointment.status === "Confirmed"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
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