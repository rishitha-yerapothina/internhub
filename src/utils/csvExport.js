export function exportApplicationsToCSV(applications) {
  const headers = ["Company", "Role", "Location", "Status"];

  const rows = applications.map((app) => [
    app.company,
    app.role,
    app.location,
    app.status,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((value) => `"${value}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "internhub-applications.csv";
  link.click();

  URL.revokeObjectURL(url);
}