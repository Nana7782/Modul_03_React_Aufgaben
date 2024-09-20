import ProductCard from "./ProductCard";
import img1 from "../assets/coconutoil.jpg";
import img2 from "../assets/polaroid.avif";
import img3 from "../assets/maui_shampoo.webp";

function ProductList() {
  const products = [
    {
      img: img1,
      name: "Coconutoil",
      price: "25.99",
    },
    {
      img: img2,
      name: "Polaroid",
      price: "45.99",
    },
    {
      img: img3,
      name: "Maui Shampoo",
      price: "7.99",
    },
  ];
  return (
    <div id="productContainer">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
