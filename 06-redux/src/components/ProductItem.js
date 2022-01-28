const ProductItem = ({ data, addToCart }) => {
  let { name, price } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>${price} USD</h5>
      <button onClick={() => addToCart(data.id)}>Add to cart!</button>
    </div>
  );
};

export default ProductItem;
