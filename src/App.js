import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home"
import Product from "./pages/Product";
import RootLayout from "./routes/Root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <Product />
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
