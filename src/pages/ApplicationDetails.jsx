import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications, updateApplication } = useApplications();

  const application = applications.find((app) => app.id === Number(id));

  const [formData, setFormData] = useState(application);

  if (!application) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 pt-32">
          <h1 className="text-3xl font-bold">Application not found</h1>
        </main>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateApplication(formData);
    navigate("/internships");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-32">
        <h1 className="text-4xl font-bold">Edit Application</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
          />

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
            <option>Completed</option>
          </select>

          <button
            type="submit"
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}

export default ApplicationDetails;