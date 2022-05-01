import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="welcome" element={<Welcome />} />
        <Route
          exact
          path="/dashboard"
          name="dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
