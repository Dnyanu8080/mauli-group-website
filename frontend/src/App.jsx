import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import CorporateHome from "./pages/corporate/CorporateHome";

import {
  AboutPage,
  ServicesPage,
  ProjectsPage,
  ProjectDetailsPage,
  GalleryPage,
  LocationsPage,
  ContactPage,
  GetQuotePage,
  CorporateNotFound,
} from "./pages/corporate/CorporatePages";

// Existing EstatePro application
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* =====================================
            MAULI GROUP CORPORATE WEBSITE
        ===================================== */}

        <Route path="/" element={<CorporateHome />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route
          path="/projects/:id"
          element={<ProjectDetailsPage />}
        />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/locations" element={<LocationsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/get-quote" element={<GetQuotePage />} />


        {/* =====================================
            EXISTING ESTATEPRO APPLICATION
        ===================================== */}

        <Route path="/estate" element={<Home />} />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* =====================================
            404 PAGE
        ===================================== */}

        <Route
          path="*"
          element={<CorporateNotFound />}
        />

      </Routes>
    </AuthProvider>
  );
}

export default App;