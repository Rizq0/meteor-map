import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { NightModeProvider } from "./contexts/night-mode.jsx";
import { IconToggleProvider } from "./contexts/icon-toggle.jsx";
import "@mantine/core/styles.css";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider defaultColorScheme="dark">
      <NightModeProvider>
        <IconToggleProvider>
          <App />
        </IconToggleProvider>
      </NightModeProvider>
    </MantineProvider>
  </BrowserRouter>
);
