import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-6 pt-32 lg:flex-row lg:pt-40">
        <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute right-20 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            ✨ Your Internship Journey Starts Here
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              Internship Hunt
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
            Track applications, deadlines, interviews and offers from a single
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
              Get Started Free
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Learn More
            </button>
          </div>

          <div className="mt-10 space-y-3 border-t border-white/10 pt-6 text-sm text-zinc-400">
            <p>✓ Track Multiple Applications</p>
            <p>✓ Smart Deadline Reminders</p>
            <p>✓ Real-time Progress Analytics</p>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <h3 className="mb-5 text-lg font-semibold">Recent Applications</h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 transition hover:bg-white/5">
              <p className="font-semibold">Google</p>
              <p className="text-sm text-zinc-400">
                Software Engineering Intern
              </p>
              <p className="mt-2 text-sm font-medium text-yellow-400">
                Interview
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4 transition hover:bg-white/5">
              <p className="font-semibold">Microsoft</p>
              <p className="text-sm text-zinc-400">
                Product Management Intern
              </p>
              <p className="mt-2 text-sm font-medium text-blue-400">Applied</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4 transition hover:bg-white/5">
              <p className="font-semibold">Amazon</p>
              <p className="text-sm text-zinc-400">
                Frontend Developer Intern
              </p>
              <p className="mt-2 text-sm font-medium text-green-400">
                Completed
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 border-t border-white/10 pt-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-xs text-zinc-400">Applied</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold">5</h3>
              <p className="text-xs text-zinc-400">In Progress</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold">3</h3>
              <p className="text-xs text-zinc-400">Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Why Choose InternHub?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Built for students who want to stay organized, apply consistently,
            and track every internship opportunity without confusion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500 hover:bg-white/10">
            <h3 className="text-xl font-semibold">Organized Tracking</h3>
            <p className="mt-3 text-zinc-400">
              Store every company, role, deadline, and status in one place
              instead of losing details in notes or spreadsheets.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500 hover:bg-white/10">
            <h3 className="text-xl font-semibold">Smart Progress View</h3>
            <p className="mt-3 text-zinc-400">
              Use dashboard stats, analytics, and Kanban view to understand
              where your applications stand.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500 hover:bg-white/10">
            <h3 className="text-xl font-semibold">Deadline Awareness</h3>
            <p className="mt-3 text-zinc-400">
              Keep track of upcoming deadlines so you don’t miss important
              internship applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;