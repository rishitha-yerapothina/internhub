import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Analytics() {
  const { applications } = useApplications();

  const total = applications.length;
  const interviews = applications.filter((app) => app.status === "Interview").length;
  const offers = applications.filter((app) => app.status === "Offer").length;
  const rejected = applications.filter((app) => app.status === "Rejected").length;

  const successRate = total > 0 ? Math.round((offers / total) * 100) : 0;

  const statusData = ["Applied", "Interview", "Offer", "Rejected", "Completed"].map(
    (status) => ({
      name: status,
      value: applications.filter((app) => app.status === status).length,
    })
  );

  const colors = ["#8b5cf6", "#facc15", "#22c55e", "#ef4444", "#38bdf8"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32">
        <h1 className="text-4xl font-bold">Analytics</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400">Total Applications</p>
            <h2 className="mt-2 text-3xl font-bold">{total}</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400">Interviews</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-400">{interviews}</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400">Offers</p>
            <h2 className="mt-2 text-3xl font-bold text-green-400">{offers}</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400">Success Rate</p>
            <h2 className="mt-2 text-3xl font-bold text-purple-400">{successRate}%</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Applications by Status</h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Status Breakdown</h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusData}>
                  <XAxis dataKey="name" stroke="#a1a1aa" />
                  <YAxis stroke="#a1a1aa" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Rejected applications: {rejected}
        </p>
      </main>
    </div>
  );
}

export default Analytics;