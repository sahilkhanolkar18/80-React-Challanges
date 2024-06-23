import Home from "@pages/Home.tsx";
import { setupStore } from "@store/store.ts";
import "@styles/index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallangeTemplate from "./pages/ChallangeTemplate";
// import Test from "./pages/Test";
import NotFound from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <ChallangeTemplate />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
