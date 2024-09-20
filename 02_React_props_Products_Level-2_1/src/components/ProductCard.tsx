interface ProductCardProps {
  img: string;
  name: string;
  price: string;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div id="productCard">
      <img className="img" src={props.img} alt={props.name} />
      <div className="product-name">{props.name}</div>
      <div className="price">{props.price} €</div>
      <button>buy now</button>
    </div>
  );
}

export default ProductCard;
