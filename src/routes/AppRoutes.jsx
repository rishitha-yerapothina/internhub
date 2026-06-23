import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AddApplication from "../pages/AddApplication";
import Internships from "../pages/Internships";
import ApplicationDetails from "../pages/ApplicationDetails";
import Analytics from "../pages/Analytics";
import Resources from "../pages/Resources";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Dashboard />} />
      <Route path="/add" element={<AddApplication />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/application/:id" element={<ApplicationDetails />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/resources" element={<Resources />} />
      
    </Routes>
  );
}

export default AppRoutes;