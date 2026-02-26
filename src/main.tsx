import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export function App() {
  return (
    <div className="p-8 bg-bg-base min-h-screen">
      <h1 className="text-fg-primary text-2xl font-bold mb-4">slug-ds</h1>
      <p className="text-fg-secondary">Design system development preview</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
