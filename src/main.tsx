import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator> {/*Private Route */}
      <App />
    </Authenticator>
  </React.StrictMode>
)

