// eslint-disable-next-line no-unused-vars
import React from "react";

import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import First from "./First";
const App = () => {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/projects" element={<ProjectDetails />} />
        </Routes>
      </Router>
      <KindeProvider
        clientId="fa55d0e41b9046c29fd385eb663daeb1"
        domain="https://porfolio.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173"
      >
        {/* <Routes /> */}
      </KindeProvider>
    </div>
  );
};

export default App;
