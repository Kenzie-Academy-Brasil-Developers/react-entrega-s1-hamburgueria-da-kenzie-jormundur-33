import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Compoments/Cart";
import ProductsList from "./Compoments/ProductsList";
import Header from "./Compoments/Header";

function App() {
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  function showProducts(searchedProduct) {
    const item = searchedProduct
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    const arr = [];
    products.filter((product) => {
      if (
        item ===
          product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim() ||
        item ===
          product.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
      ) {
        arr.push(product);
        setFilteredProducts(arr);
      } else if (searchedProduct === "") {
        setFilteredProducts([]);
      }
    });
  }
  console.log(filteredProducts);
  function removeItem(id) {
    const filterCartDelete = currentSale.filter((item) => item.id !== id);
    setCurrentSale(filterCartDelete);
  }

  function removeAllItems() {
    setCurrentSale([]);
  }

  function addToCart(id) {
    products.find((item) => {
      // if (item.id === id) {
      //   setCartTotal([...cartTotal, item]);
      //   if (item.id === id && !currentSale.includes(item)) {
      //     setCurrentSale([...currentSale, item]);
      //   }
      // }
      if (item.id === id && !currentSale.includes(item)) {
        setCurrentSale([...currentSale, item]);
      }
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header iDoNotKnow={showProducts} />
      </header>

      <main className="main">
        <section className="products-render">
          {filteredProducts.length > 0 ? (
            <ProductsList products={filteredProducts} addToCart={addToCart} />
          ) : (
            <ProductsList products={products} addToCart={addToCart} />
          )}
        </section>

        <section className="cart-render">
          <Cart
            currentSale={currentSale}
            removeItem={removeItem}
            removeAllItems={removeAllItems}
            total={currentSale}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
