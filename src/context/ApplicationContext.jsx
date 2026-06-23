import { createContext, useContext, useEffect, useState } from "react";
import dummyApplications from "../data/dummyData";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState(() => {
    const savedData = localStorage.getItem("internhub-applications");
    return savedData ? JSON.parse(savedData) : dummyApplications;
  });

  useEffect(() => {
    localStorage.setItem(
      "internhub-applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const addApplication = (newApplication) => {
    setApplications((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newApplication,
      },
    ]);
  };

  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const updateApplication = (updatedApplication) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        setApplications,
        addApplication,
        deleteApplication,
        updateApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationContext);
}