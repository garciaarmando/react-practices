const CartItem = ({ data, delFromCart }) => {
  let { id, name, price } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>${price} USD</h5>
      <button>Delete</button>
      <button></button>
    </div>
  );
};

export default CartItem;
