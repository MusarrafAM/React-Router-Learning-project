import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  // console.log(useParams());
  const { ProductsId } = useParams(); //! useParams returns an object.
  return (
    <section className="section product">
      <h2>{ProductsId}</h2>
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
