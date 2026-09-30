"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Search,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "12 years experience",
    availability: "Available Today",
    patients: "2,400+",
    rating: "4.9",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    specialty: "General Physician",
    experience: "8 years experience",
    availability: "Available Tomorrow",
    patients: "1,850+",
    rating: "4.8",
    initials: "MS",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Dermatologist",
    experience: "10 years experience",
    availability: "Available Today",
    patients: "2,100+",
    rating: "4.9",
    initials: "EW",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "Orthopedic Specialist",
    experience: "15 years experience",
    availability: "Available Friday",
    patients: "3,200+",
    rating: "4.8",
    initials: "JA",
  },
  {
    id: 5,
    name: "Dr. Olivia Brown",
    specialty: "Pediatrician",
    experience: "9 years experience",
    availability: "Available Today",
    patients: "1,700+",
    rating: "4.9",
    initials: "OB",
  },
  {
    id: 6,
    name: "Dr. Daniel Wilson",
    specialty: "Neurologist",
    experience: "14 years experience",
    availability: "Available Tomorrow",
    patients: "2,800+",
    rating: "4.8",
    initials: "DW",
  },
  {
    id: 7,
    name: "Dr. Sophia Martinez",
    specialty: "Gynecologist",
    experience: "11 years experience",
    availability: "Available Today",
    patients: "2,300+",
    rating: "4.9",
    initials: "SM",
  },
  {
    id: 8,
    name: "Dr. William Taylor",
    specialty: "ENT Specialist",
    experience: "13 years experience",
    availability: "Available Friday",
    patients: "2,050+",
    rating: "4.7",
    initials: "WT",
  },
  {
    id: 9,
    name: "Dr. Ava Thompson",
    specialty: "Psychiatrist",
    experience: "7 years experience",
    availability: "Available Tomorrow",
    patients: "1,400+",
    rating: "4.8",
    initials: "AT",
  },
  {
    id: 10,
    name: "Dr. Benjamin Clark",
    specialty: "Gastroenterologist",
    experience: "16 years experience",
    availability: "Available Today",
    patients: "3,500+",
    rating: "4.9",
    initials: "BC",
  },
  {
    id: 11,
    name: "Dr. Mia Lewis",
    specialty: "Ophthalmologist",
    experience: "10 years experience",
    availability: "Available Friday",
    patients: "1,950+",
    rating: "4.8",
    initials: "ML",
  },
  {
    id: 12,
    name: "Dr. Ethan Walker",
    specialty: "Pulmonologist",
    experience: "12 years experience",
    availability: "Available Tomorrow",
    patients: "2,600+",
    rating: "4.9",
    initials: "EW",
  },
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "General Physician",
  "Dermatologist",
  "Orthopedic Specialist",
  "Pediatrician",
  "Neurologist",
  "Gynecologist",
  "ENT Specialist",
  "Psychiatrist",
  "Gastroenterologist",
  "Ophthalmologist",
  "Pulmonologist",
];

const availabilityOptions = [
  "Any Availability",
  "Available Today",
  "Available Tomorrow",
  "Available Friday",
];

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [availability, setAvailability] = useState("Any Availability");

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const searchMatch =
        normalizedSearch === "" ||
        doctor.name.toLowerCase().includes(normalizedSearch) ||
        doctor.specialty.toLowerCase().includes(normalizedSearch);

      const specialtyMatch =
        specialty === "All Specialties" ||
        doctor.specialty === specialty;

      const availabilityMatch =
        availability === "Any Availability" ||
        doctor.availability === availability;

      return searchMatch && specialtyMatch && availabilityMatch;
    });
  }, [search, specialty, availability]);

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All Specialties");
    setAvailability("Any Availability");
  };

  const hasFilters =
    search.trim() !== "" ||
    specialty !== "All Specialties" ||
    availability !== "Any Availability";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-[100] h-[68px] border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
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

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-[92px]">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Doctors
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Find the right doctor for your healthcare needs
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1fr_210px_200px_auto]">
            {/* Search */}
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctor or specialty..."
                className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-9 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Specialty */}
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {specialties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Availability */}
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {availabilityOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Clear */}
            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasFilters}
              className="h-10 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Result Header */}
        <div className="mt-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Available Doctors
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filteredDoctors.length}
              </span>{" "}
              {filteredDoctors.length === 1 ? "doctor" : "doctors"}
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              <X size={15} />
              Clear active filters
            </button>
          )}
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
                      {doctor.initials}
                    </div>

                    <div className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700">
                      <CheckCircle2 size={12} />
                      Verified
                    </div>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {doctor.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <Stethoscope size={13} />
                    {doctor.specialty}
                  </p>
                </div>

                {/* Card Details */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-slate-50 p-2.5">
                      <p className="text-[10px] text-slate-400">
                        Experience
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {doctor.experience.replace(" experience", "")}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-2.5">
                      <p className="text-[10px] text-slate-400">
                        Rating
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        ★ {doctor.rating}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-2.5">
                      <p className="text-[10px] text-slate-400">
                        Patients
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {doctor.patients}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-2.5">
                      <p className="text-[10px] text-slate-400">
                        Availability
                      </p>

                      <p className="mt-1 text-xs font-semibold text-green-600">
                        {doctor.availability.replace("Available ", "")}
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-green-100 bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
                    <Clock3 size={14} />
                    {doctor.availability}
                  </div>

                  {/* Book Appointment */}
                  <Link
                    href="/appointments"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <CalendarCheck size={16} />
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <UserRound size={27} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No doctors found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              We could not find a doctor matching your current search and
              filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}