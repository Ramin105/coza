export const addToBasket = (product) => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const updatedBasket = [...basket, product];
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };
  