import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function AddApplication() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
    applicationDate: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    navigate("/overview");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-32">
        <h1 className="text-4xl font-bold">Add Application</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Application Date</label>
            <input
              type="date"
              name="applicationDate"
              value={formData.applicationDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Status</label>
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
          </div>

          <button
            type="submit"
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
          >
            Add Application
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddApplication;