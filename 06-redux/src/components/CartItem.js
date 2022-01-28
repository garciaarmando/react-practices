const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>

      <h5>
        ${price} USD {quantity > 1 && <p>x {quantity}</p>} = ${price * quantity}
      </h5>

      {quantity && <button onClick={() => delFromCart(id)}>Remove</button>}

      <br />

      {quantity >= 2 && (
        <button onClick={() => delFromCart(id, true)}>Delete all</button>
      )}

      <br />
      <br />
    </div>
  );
};

export default CartItem;
