import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { AdminDashboard } from "./app/pages/AdminDashboard.tsx";
import { AdminLogin } from "./app/pages/AdminLogin.tsx";
import { AdminProjects } from "./app/pages/AdminProjects.tsx";
import { AdminTodo } from "./app/pages/AdminTodo.tsx";
import { AdminLeads } from "./app/pages/AdminLeads.tsx";
import { AdminClients } from "./app/pages/AdminClients.tsx";
import { AdminFiles } from "./app/pages/AdminFiles.tsx";
import { AdminSettings } from "./app/pages/AdminSettings.tsx";
import "./styles/index.css";
import emailjs from "@emailjs/browser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

emailjs.init("IhfZK-dOg8HkPlms_");

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/leads" element={<AdminLeads />} />
      <Route path="/admin/clients" element={<AdminClients />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/todo" element={<AdminTodo />} />
      <Route path="/admin/files" element={<AdminFiles />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
    </Routes>
  </BrowserRouter>
);