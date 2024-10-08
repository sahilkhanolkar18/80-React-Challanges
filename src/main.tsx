import Home from "@pages/Home.tsx";
import "@styles/index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallengeTemplate from "./pages/ChallengeTemplate";
import NotFound from "./components/ErrorPage";
import SideBar from "./components/SideBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <ChallengeTemplate />,
  },
  {
    path: "/sidebar",
    element: <SideBar />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
