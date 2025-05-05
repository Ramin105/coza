import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/reducer/productSlice";
import styles from "./Products.module.css"
const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <div>yuklenir</div>;
  if (status === "failed") return <div>xeta {error}</div>;

  return (
    <div className={styles.productsContainer}>
      {items.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.imgbox}><img
            src={product.img}
            alt={product.title}
            className="product-image"
          /></div>
         <div className={styles.text}> <h3>{product.title}</h3>
         <p>${product.price}</p></div>
        </div>
      ))}
    </div>
  );
};

export default Products;
