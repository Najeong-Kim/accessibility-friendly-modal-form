import "modern-normalize";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ModalFormPage from "./ModalFormPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalFormPage />
  </StrictMode>
);
