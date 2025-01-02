import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products:", products);

  return (
    <div className="home1">
    <div className="home2">
      <h1>Current Products ❤️❤️</h1>
      <h2>No problem found</h2>
      <Link to={"/create"}>
        Create a Product
      </Link>
</div>
      <div className="years">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src={product.image} alt={product.name} className="product-image" />

            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
