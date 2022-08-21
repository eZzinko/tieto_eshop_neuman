import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import Cart from "./pages/Cart.page";
import Product from "./pages/Product.page";
import Products from "./pages/Products.page";

function App() {
  return (
    <div className="relative bg-gray-50 ">
      <Navbar />
      <main className="p-4 relative flex-grow flex flex-col items-stretch overflow-x-hidden m-auto max-w-7xl w-full content-start min-h-screen">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
