import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProjectsProvider } from "./context/ProjectsContext";
const baseUrl = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectsProvider>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </ProjectsProvider>
  </React.StrictMode>
);
