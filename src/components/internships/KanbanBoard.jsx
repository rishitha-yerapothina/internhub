function KanbanBoard({ applications }) {
  const statuses = ["Applied", "Interview", "Offer", "Rejected", "Completed"];

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold">Kanban Board</h2>

      <div className="grid gap-5 lg:grid-cols-5">
        {statuses.map((status) => {
          const statusApps = applications.filter(
            (app) => app.status === status
          );

          return (
            <div
              key={status}
              className="min-h-80 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <h3 className="mb-4 font-semibold text-purple-400">
                {status} ({statusApps.length})
              </h3>

              <div className="space-y-3">
                {statusApps.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-xl border border-white/10 bg-black/40 p-4"
                  >
                    <h4 className="font-semibold">{app.company}</h4>
                    <p className="text-sm text-zinc-400">{app.role}</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      📍 {app.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KanbanBoard;