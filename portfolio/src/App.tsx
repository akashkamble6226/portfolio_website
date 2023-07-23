import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Experience from "./Components/Antd_Components/Experience";
import Home from "./Components/Antd_Components/Home";
import Services from "./Components/Antd_Components/Services";
import Work from "./Components/Antd_Components/Work";
import Root from "./Components/Antd_Components/Root";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/experience", element: <Experience /> },
        { path: "/work", element: <Work /> },
        { path: "/services", element: <Services /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
