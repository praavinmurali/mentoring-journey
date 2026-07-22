import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductLists = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = axios.get(apiUrl);
        setProducts((await response).data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    //call the async fn
    fetchProducts();
  }, []);
  if (loading) return <p>Loading products</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "1rem",
      }}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{ border: "1px solid #ddd", padding: "1rem" }}
          >
            <img
              style={{ height: "150px", objectFit: "contain" }}
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductLists;
