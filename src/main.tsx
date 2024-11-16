import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";

// Import the generated route tree

import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// create a new router instance

const router = createRouter({ routeTree });

// Register the router instance for type safety

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

//  Render the app

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// createRoot(document.getElementById("root")!).render();
