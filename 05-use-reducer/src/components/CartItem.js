const CartItem = ({ data, delFromCart }) => {
  let { name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price} USD {quantity > 1 && <h5>x {quantity}</h5>} = $
        {price * quantity}
      </h5>

      <button>Delete</button>
      <button>Delete All</button>
    </div>
  );
};

export default CartItem;
