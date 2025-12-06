import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Page from "./dashboard/page.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";
import { AllNotes } from "../pages/All-Notes.jsx";
import { ArchivedNotes } from "../pages/Archived-Notes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { index: true, element: <Navigate to="/all-notes" /> },
      { path: "/all-notes", element: <AllNotes /> },
      { path: "/archived-notes", element: <ArchivedNotes /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
