import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/components";
import { Error, Ruber, RuberList } from "./pages/pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <RuberList /> },
        { path: "rubro/:id?", element: <Ruber /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
