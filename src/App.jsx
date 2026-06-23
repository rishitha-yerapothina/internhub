import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ApplicationProvider } from "./context/ApplicationContext";

function App() {
  return (
    <ApplicationProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ApplicationProvider>
  );
}

export default App;