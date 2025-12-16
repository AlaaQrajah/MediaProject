import AppRoutes from "./app/routes/AppRoutes";
import { AppProviders } from "./app/providers/AppProviders";
import "./index.css";
import "./styles/globals.css";  

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
