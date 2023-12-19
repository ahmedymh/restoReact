import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Acceuil from "./components/Acceuil"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Acceuil />
    },
  ]);

  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App