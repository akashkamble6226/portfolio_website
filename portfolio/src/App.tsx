// import './App.css';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Experience from './Components/Experience';
import Root from './Components/Root';
import Work from './Components/Work';
import Services from './Components/Services';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/experience', element: <Experience /> },
        { path: '/work', element: <Work /> },
        { path: '/services', element: <Services /> }
      ]
    }

  ]);



  return <RouterProvider router={router}></RouterProvider>
}

export default App;
