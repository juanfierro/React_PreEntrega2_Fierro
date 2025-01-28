import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailsContainer from "./ItemDetailsContainer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="¡Bienvenidos a MiBouquet!"
              setCartCount={setCartCount}
            />
          }
        />

        {/* Ruta de categoría */}
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting={({ categoryId }) =>
                `Categoría ${categoryId}`
              }
              setCartCount={setCartCount}
            />
          }
        />

        {/* Ruta de detalles del producto */}
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />

        {/* Ruta de error */}
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
