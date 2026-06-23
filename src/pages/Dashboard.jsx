import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Dashboard() {
  const { applications } = useApplications();

  const totalApplications = applications.length;
  const interviews = applications.filter((app) => app.status === "Interview").length;
  const offers = applications.filter((app) => app.status === "Offer").length;
  const rejected = applications.filter((app) => app.status === "Rejected").length;

  const successRate =
    totalApplications > 0 ? Math.round((offers / totalApplications) * 100) : 0;

  const upcomingDeadlines = applications
    .filter((app) => app.deadline)
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-zinc-400">Applications</h3>
            <p className="mt-2 text-3xl font-bold">{totalApplications}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-zinc-400">Interviews</h3>
            <p className="mt-2 text-3xl font-bold text-yellow-400">{interviews}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-zinc-400">Offers</h3>
            <p className="mt-2 text-3xl font-bold text-green-400">{offers}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-zinc-400">Rejected</h3>
            <p className="mt-2 text-3xl font-bold text-red-400">{rejected}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-zinc-400">Success Rate</h3>
            <p className="mt-2 text-3xl font-bold text-purple-400">{successRate}%</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Recent Applications</h2>

            <div className="space-y-4">
              {applications.slice(-5).reverse().map((app) => (
                <div key={app.id} className="rounded-xl border border-white/10 p-4">
                  <h3 className="font-semibold">{app.company}</h3>
                  <p className="text-zinc-400">{app.role}</p>
                  <p className="mt-2 text-sm">📍 {app.location}</p>
                  <p className="mt-2 text-purple-400">{app.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Deadline Reminders</h2>

            <div className="space-y-4">
              {upcomingDeadlines.length > 0 ? (
                upcomingDeadlines.map((app) => (
                  <div key={app.id} className="rounded-xl border border-white/10 p-4">
                    <h3 className="font-semibold">{app.company}</h3>
                    <p className="text-zinc-400">{app.role}</p>
                    <p className="mt-2 text-sm text-yellow-400">
                      Deadline: {app.deadline}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-zinc-400">No deadlines added yet.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;