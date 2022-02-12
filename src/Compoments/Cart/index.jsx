import "./style.css";

function Cart({ currentSale, removeItem, removeAllItems, total }) {
  let totalPrice = total.reduce(
    (currentValue, nextValue) => nextValue.price + currentValue,
    0
  );

  return (
    <section className="cart-section">
      <div className="div-h2">
        <h2>Carrinho de compras</h2>
      </div>
      {currentSale.length > 0
        ? [
            <>
              <ul className="cart">
                {currentSale.map((sale) => (
                  <li>
                    <img src={sale.img} alt={sale.name} />
                    <div>
                      <h3>{sale.name}</h3>
                      <p>{sale.category}</p>
                    </div>

                    <button onClick={() => removeItem(sale.id)}>Remover</button>
                    {/* <button onClick={console.log(sale.price * 2)}> */}
                      {/* Increase */}
                    {/* </button> */}
                    {/* <button>Decrease</button> */}
                  </li>
                ))}
              </ul>
              <div className="total">
                <p>Total</p>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button className="remove-all" onClick={() => removeAllItems()}>
                Remover todos
              </button>
            </>,
          ]
        : [
            <div className="empty-cart">
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </div>,
          ]}
    </section>
  );
}

export default Cart;
