import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import Eirth from "./Eirth";
import Ninth from "./Ninth";
import Tenth from "./Tenth";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Eirth />
    <Ninth />
    <Tenth />
  </StrictMode>
);
