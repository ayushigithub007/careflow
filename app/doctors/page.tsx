import Link from "next/link";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "12 years experience",
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    specialty: "General Physician",
    experience: "8 years experience",
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Dermatologist",
    experience: "10 years experience",
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "Orthopedic Specialist",
    experience: "15 years experience",
    availability: "Available Friday",
  },
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            CareFlow
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Find the right specialist for your healthcare needs
          </h1>

        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search doctors or specialties..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Doctors grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Avatar */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                {doctor.name
                  .split(" ")
                  .slice(1)
                  .map((name) => name[0])
                  .join("")}
              </div>

              <h2 className="mt-5 text-lg font-semibold text-slate-900">
                {doctor.name}
              </h2>

              <p className="mt-1 font-medium text-blue-600">
                {doctor.specialty}
              </p>

              <p className="mt-3 text-sm text-slate-500">
                {doctor.experience}
              </p>

              <div className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                {doctor.availability}
              </div>

              <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}