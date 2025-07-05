import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";

const worker = new Worker(new URL("./Worker.ts", import.meta.url), {
  type: "module",
});

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(elem).render(app);
