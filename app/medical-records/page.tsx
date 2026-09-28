import Link from "next/link";

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

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Medical Records
            </h1>

          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
            + Add Record
          </button>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search patient, doctor, or diagnosis..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Diagnosis
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Date
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
                {records.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {record.patient}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {record.doctor}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {record.diagnosis}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {record.date}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          record.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {record.status}
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