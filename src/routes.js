import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CustomFormats } from "./pages/CustomFormats";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";
import { Miscelaneous } from "./pages/Miscelaneous";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/misc",
        element: <Miscelaneous />,
      },
      {
        path: "/custom",
        element: <CustomFormats />,
      },
    ],
  },
]);
