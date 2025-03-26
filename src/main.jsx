import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/cvApp";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp />
  </StrictMode>
);
