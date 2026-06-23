import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";
import { exportApplicationsToCSV } from "../utils/csvExport";
import KanbanBoard from "../components/internships/KanbanBoard";

function Internships() {
  const { applications, deleteApplication } = useApplications();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewMode, setViewMode] = useState("list");

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h1 className="text-4xl font-bold">Internships</h1>

          <button
            onClick={() => exportApplicationsToCSV(applications)}
            className="rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200"
          >
            Export CSV
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search company or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 outline-none focus:border-purple-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none focus:border-purple-500"
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setViewMode("list")}
            className={`rounded-xl px-5 py-2 font-semibold ${
              viewMode === "list"
                ? "bg-purple-600 text-white"
                : "border border-white/10 bg-white/5 text-zinc-300"
            }`}
          >
            List View
          </button>

          <button
            onClick={() => setViewMode("kanban")}
            className={`rounded-xl px-5 py-2 font-semibold ${
              viewMode === "kanban"
                ? "bg-purple-600 text-white"
                : "border border-white/10 bg-white/5 text-zinc-300"
            }`}
          >
            Kanban View
          </button>
        </div>

        {viewMode === "list" ? (
          <div className="mt-8 grid gap-5">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h2 className="text-xl font-semibold">{app.company}</h2>
                <p className="text-zinc-400">{app.role}</p>
                <p className="mt-2 text-sm">📍 {app.location}</p>
                <p className="mt-2 text-purple-400">{app.status}</p>

                <div className="mt-4 flex gap-3">
                  <Link
                    to={`/application/${app.id}`}
                    className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteApplication(app.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <KanbanBoard applications={filteredApplications} />
        )}
      </main>
    </div>
  );
}

export default Internships;