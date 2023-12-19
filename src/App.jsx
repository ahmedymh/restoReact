import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Acceuil from "./components/Acceuil"
import Restaurant from "./components/Restaurant"
import Contact from "./components/Contact"
import Pictures from "./components/Pictures"
import PicturesSlide2 from "./components/PicturesSlide2"
import PicturesSlide3 from "./components/PicturesSlide3"
import PicturesSlide4 from "./components/PicturesSlide4"
import Menu from "./components/Menu"
import './index.css'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Acceuil />
    },
    {
      path: "/restaurant",
      element: <Restaurant />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/pictures",
      element: <Pictures />
    },
    {
      path: "/pictureSlide2",
      element: <PicturesSlide2 />
    },
    {
      path: "/pictureSlide3",
      element: <PicturesSlide3 />
    },
    {
      path: "/pictureSlide4",
      element: <PicturesSlide4 />
    },
    {
      path: "/menu",
      element: <Menu />
    },
  ]);

  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App