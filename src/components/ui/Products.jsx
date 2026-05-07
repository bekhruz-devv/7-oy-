const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div
      className="Product-box"
      style={{
        width: "fit-content",
        marginRight: " auto",
        marginLeft: " auto",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <img
        style={{ width: "200px" }}
        placeholder="Mahsulot-rasmi"
        src={image}
        alt={name}
      />
      <div
        style={{ marginLeft: "auto", marginRight: "auto", paddingLeft: "35px" }}
      >
        <p>{`Nomi: ${name}`}</p>
        <p>{`Narxi: ${price} so'm`}</p>
        <p>{`Mavjudligi: ${inStock ? "Bor✅" : "Yoq❌"}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
