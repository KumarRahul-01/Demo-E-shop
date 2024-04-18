import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Shop from "./Components/Shop";
import { useState } from "react";
import CartList from "./Components/CartList";


function App() {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigation handleChange={handleSearchChange} />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "shop", element: <Shop searchQuery={searchQuery} /> },
        { path: "cart", element: <CartList /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
