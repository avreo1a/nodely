import React from "react";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import NodelyPage from "./pages/NodelyPage/NodelyMain.tsx";

import "./index.css";

// Configure AWS Amplify!
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/nodely" element={<NodelyPage />} />
        




        {/* Protected App (Requires Authentication) */}
        <Route
          path="/Login"
          element={
            <Authenticator>
              <App />
            </Authenticator>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
