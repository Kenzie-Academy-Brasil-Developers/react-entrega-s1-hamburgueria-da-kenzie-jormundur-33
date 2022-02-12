import Products from "../Products";
import "./style.css";
function ProductsList({ products, addToCart }) {
  return (
    <ul className="products-ul" key="ul-products">
      {products.map((product) => (
        <Products
          id={product.id}
          img={product.img}
          name={product.name}
          category={product.category}
          price={product.price}
          addToCart={() => addToCart(product.id)}
        />
      ))}
    </ul>
  );
}

export default ProductsList;
