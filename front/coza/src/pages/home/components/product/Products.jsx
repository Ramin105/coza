import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/reducer/productSlice";
import styles from "./Products.module.css";
import { addToBasket } from "../../../../local/LocalStorage"; 

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <div>yuklenir</div>;
  if (status === "failed") return <div>xeta {error}</div>;

  const handleAddToBasket = (product) => {
    addToBasket(product);
    alert(`${product.title} sepetə atıldı`);
  };

  return (
    <div className={styles.productsContainer}>
      {items && items.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.imgbox}>
            <img src={product.img} alt={product.title} className="product-image" />
          </div>
          <div className={styles.text}>
            <h3 style={{ opacity: "0.4" }}>{product.title}</h3>
            <p style={{ opacity: "0.6" }}>{product.price}</p>
            <button onClick={() => handleAddToBasket(product)} className={styles.basketButton}>
              Sepete at
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
