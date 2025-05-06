import React, { useEffect, useState } from "react";
import styles from "./Basket.module.css";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(items);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedItems = basketItems.filter(
      (_, index) => index !== indexToRemove
    );
    setBasketItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
  };

  const getTotalPrice = () => {
    return basketItems
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <div >
      <h2>Sepet</h2>
      {basketItems.length === 0 ? (
        <p>Sepet boşdur</p>
      ) : (
        <div className={styles.basketContainer}>
          {basketItems.map((item, index) => (
            <div key={index} className={styles.basketItem}>
              <img src={item.img} alt={item.title} />
              <div className={styles.itemDetails}>
                <h4>{item.title}</h4>
                <p>{item.price} ₼</p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className={styles.deleteButton}
              >
                Sil
              </button>
            </div>
          ))}
         
        </div>
      )}
    </div>
  );
};

export default Basket;
