import "./style.css";

function Products({ id, img, name, category, price, addToCart }) {
  return (
    <div className="li-wrap">
      <li className="products-li" key={id}>
        <div className="img-box">
          <img src={img} alt={name} />
        </div>
        <div className="price-name-etc">
          <h2>{name}</h2>
          <h3>{category}</h3>
          <p>R$ {price.toFixed(2)}</p>
          <button onClick={addToCart}>Adicionar</button>
        </div>
      </li>
    </div>
  );
}

export default Products;
