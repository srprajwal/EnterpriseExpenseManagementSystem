import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

function App() {
  return (
    <Router> {/* Router should wrap everything */}
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Router>
  );
}

export default App;
