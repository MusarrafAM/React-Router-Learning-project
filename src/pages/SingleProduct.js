import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { ProductsId } = useParams(); //! useParams returns an object.
  const product = products.find((product) => product.id === ProductsId);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
