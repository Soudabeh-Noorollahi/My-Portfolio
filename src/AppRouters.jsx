import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import RequestCV from "./components/pages/RequestCV";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/request-cv" element={<RequestCV />} />
    </Routes>
  );
}

export default AppRoutes;
