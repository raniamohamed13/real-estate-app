import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitDetails from "./pages/UnitDetails";
import Zones from "./pages/Zones";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import ZoneProjects from "./pages/ZoneProjects";
import ProjectDetails from "./pages/ProjectDetails";

import DeveloperProjects from "./pages/DeveloperProjects";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />

        <Route path="/units" element={<Units />} />
        <Route path="/units/:id" element={<UnitDetails />} />

        <Route path="/zones" element={<Zones />} />
        <Route path="/zones/:id" element={<ZoneProjects />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />

<Route path="/developers" element={<Developers />} />
<Route
  path="/developers/:id"
  element={<DeveloperProjects />}
/>

        <Route path="/contactus" element={<Contact />} />
      </Route>
    </Routes>
  );
}