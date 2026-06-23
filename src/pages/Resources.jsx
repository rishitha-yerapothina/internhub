import Navbar from "../components/Navbar";

function Resources() {
  const resources = [
    {
      title: "Resume Tips",
      description:
        "Use action verbs, quantify achievements, keep your resume concise, and tailor it for each internship application.",
      link: "https://www.overleaf.com/latex/templates",
    },
    {
      title: "Interview Preparation",
      description:
        "Practice DSA, system design basics, behavioral questions, and project explanations before interviews.",
      link: "https://leetcode.com",
    },
    {
      title: "Internship Websites",
      description:
        "Explore internship opportunities on LinkedIn, Wellfound, Internshala, Indeed, and YC Jobs.",
      link: "https://wellfound.com",
    },
    {
      title: "Cold Emailing Guide",
      description:
        "Learn how to write concise and effective cold emails to recruiters and startup founders.",
      link: "https://hunter.io/blog/cold-email-templates",
    },
    {
      title: "Frontend Learning",
      description:
        "Master React, JavaScript, Tailwind CSS, and modern frontend development practices.",
      link: "https://roadmap.sh/frontend",
    },
    {
      title: "Machine Learning Learning Path",
      description:
        "Learn Python, NumPy, Pandas, Scikit-learn, Deep Learning, and MLOps.",
      link: "https://roadmap.sh/ai-data-scientist",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="mt-3 text-zinc-400">
            Useful guides, websites, and learning materials to help you
            succeed in your internship journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500 hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">
                {resource.title}
              </h2>

              <p className="mt-4 text-zinc-400">
                {resource.description}
              </p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-xl bg-purple-600 px-4 py-2 font-medium hover:bg-purple-700"
              >
                Visit Resource
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8">
          <h2 className="text-2xl font-bold">
            Internship Success Checklist
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>✅ Maintain an updated resume</li>
            <li>✅ Build at least 3 strong projects</li>
            <li>✅ Practice DSA regularly</li>
            <li>✅ Optimize LinkedIn and GitHub</li>
            <li>✅ Apply consistently every week</li>
            <li>✅ Reach out to recruiters and founders</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Resources;