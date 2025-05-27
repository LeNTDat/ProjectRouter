import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home"
import Product from "./pages/Product";
import RootLayout from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'products',
        element: <Product />
      },
      {
        path: 'products/:productId',
        element: <ProductDetail  />
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
