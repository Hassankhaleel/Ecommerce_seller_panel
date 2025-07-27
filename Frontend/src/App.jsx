import React, { useEffect, useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex gap-6">
          <button
            onClick={() => setSelectedCategory("men's clothing")}
            className={`font-semibold ${selectedCategory === "men's clothing" ? 'text-blue-600' : ''}`}
          >
            👔 Men
          </button>
          <button
            onClick={() => setSelectedCategory("women's clothing")}
            className={`font-semibold ${selectedCategory === "women's clothing" ? 'text-pink-600' : ''}`}
          >
            👗 Women
          </button>
        </div>
        <div className="font-semibold">
          🛒 Cart: <span className="text-green-600">{cart.length}</span>
        </div>
      </nav>

      {/* Product Listing */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4 capitalize">{selectedCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-4" />
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              <p className="mt-2 font-bold text-blue-600">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
