"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  CalendarPlus,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Search,
  UserRound,
  X,
} from "lucide-react";

const appointments = [
  {
    id: 1,
    patient: "Aarav Sharma",
    doctor: "Dr. Sarah Johnson",
    date: "24 Sep 2026",
    dateValue: "2026-09-24",
    time: "10:00 AM",
    type: "Cardiology",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Priya Verma",
    doctor: "Dr. Michael Smith",
    date: "24 Sep 2026",
    dateValue: "2026-09-24",
    time: "11:30 AM",
    type: "General Consultation",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Rahul Singh",
    doctor: "Dr. James Anderson",
    date: "24 Sep 2026",
    dateValue: "2026-09-24",
    time: "01:00 PM",
    type: "Orthopedic",
    status: "Confirmed",
  },
  {
    id: 4,
    patient: "Ananya Gupta",
    doctor: "Dr. Emily Williams",
    date: "25 Sep 2026",
    dateValue: "2026-09-25",
    time: "09:30 AM",
    type: "Dermatology",
    status: "Pending",
  },
  {
    id: 5,
    patient: "Rohan Mehta",
    doctor: "Dr. Daniel Wilson",
    date: "25 Sep 2026",
    dateValue: "2026-09-25",
    time: "10:30 AM",
    type: "Neurology",
    status: "Confirmed",
  },
  {
    id: 6,
    patient: "Neha Kapoor",
    doctor: "Dr. Olivia Brown",
    date: "26 Sep 2026",
    dateValue: "2026-09-26",
    time: "12:00 PM",
    type: "Pediatrics",
    status: "Pending",
  },
  {
    id: 7,
    patient: "Vikram Patel",
    doctor: "Dr. Benjamin Clark",
    date: "26 Sep 2026",
    dateValue: "2026-09-26",
    time: "02:30 PM",
    type: "Gastroenterology",
    status: "Confirmed",
  },
  {
    id: 8,
    patient: "Sneha Malhotra",
    doctor: "Dr. Mia Lewis",
    date: "27 Sep 2026",
    dateValue: "2026-09-27",
    time: "09:00 AM",
    type: "Ophthalmology",
    status: "Cancelled",
  },
];

export default function AppointmentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [date, setDate] = useState("");

  const filteredAppointments = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return appointments.filter((appointment) => {
      const searchMatch =
        normalizedSearch === "" ||
        appointment.patient.toLowerCase().includes(normalizedSearch) ||
        appointment.doctor.toLowerCase().includes(normalizedSearch) ||
        appointment.type.toLowerCase().includes(normalizedSearch);

      const statusMatch =
        status === "All Status" || appointment.status === status;

      const dateMatch = date === "" || appointment.dateValue === date;

      return searchMatch && statusMatch && dateMatch;
    });
  }, [search, status, date]);

  const clearFilters = () => {
    setSearch("");
    setStatus("All Status");
    setDate("");
  };

  const hasFilters =
    search.trim() !== "" || status !== "All Status" || date !== "";

  const confirmedCount = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;

  const pendingCount = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  const cancelledCount = appointments.filter(
    (appointment) => appointment.status === "Cancelled"
  ).length;

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
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Schedule and manage patient appointments
            </h1>

          </div>

          <Link
            href="/appointments"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <CalendarPlus size={17} />
            New Appointment
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Total Appointments</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {appointments.length}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <CalendarCheck size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Confirmed</p>
                <p className="mt-1 text-2xl font-bold text-green-600">
                  {confirmedCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <CheckCircle2 size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Pending</p>
                <p className="mt-1 text-2xl font-bold text-yellow-600">
                  {pendingCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                <Clock3 size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Cancelled</p>
                <p className="mt-1 text-2xl font-bold text-red-600">
                  {cancelledCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <X size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            Appointment List
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredAppointments.length}
            </span>{" "}
            {filteredAppointments.length === 1
              ? "appointment"
              : "appointments"}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1fr_200px_200px_auto]">
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
                placeholder="Search patient, doctor or type..."
                className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-9 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Status */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>

            {/* Date */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

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

        {/* Active Filters */}
        {hasFilters && (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Filters are currently active
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <X size={13} />
              Clear active filters
            </button>
          </div>
        )}

        {/* Appointment Table */}
        {filteredAppointments.length > 0 ? (
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                      Patient
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                      Doctor
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                      Date & Time
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600">
                      Type
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
                  {filteredAppointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      {/* Patient */}
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <UserRound size={16} />
                          </div>

                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {appointment.patient}
                            </p>

                            <p className="text-[11px] text-slate-400">
                              Patient
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Doctor */}
                      <td className="px-5 py-3 text-sm text-slate-600">
                        {appointment.doctor}
                      </td>

                      {/* Date & Time */}
                      <td className="px-5 py-3">
                        <p className="text-sm text-slate-700">
                          {appointment.date}
                        </p>

                        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                          <Clock3 size={12} />
                          {appointment.time}
                        </p>
                      </td>

                      {/* Type */}
                      <td className="px-5 py-3">
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                          {appointment.type}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            appointment.status === "Confirmed"
                              ? "bg-green-50 text-green-700"
                              : appointment.status === "Pending"
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-red-50 text-red-700"
                          }`}
                        >
                          {appointment.status === "Confirmed" && (
                            <CheckCircle2 size={12} />
                          )}

                          {appointment.status === "Pending" && (
                            <Clock3 size={12} />
                          )}

                          {appointment.status === "Cancelled" && (
                            <X size={12} />
                          )}

                          {appointment.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-3">
                        <button
                          type="button"
                          className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <CalendarCheck size={27} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No appointments found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              No appointments match your current search or filters.
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