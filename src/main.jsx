import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/style.css";


import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRouters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </StrictMode>
);
