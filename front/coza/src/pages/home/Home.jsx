import React from "react";
import styles from "./Home.module.css";
import Section2 from "./components/section2/Section2";
import Products from "./components/product/products";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <section className={styles.section1}>
        <div className={styles.section1text}>
          <h2>Men New-Season</h2>
          <h1>Jackets Coats</h1>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
      <Section2 />
      <section className={styles.section3}>
        <div className={styles.section3head}>
          <h1>Product Overview</h1>
          <div className={styles.section3nav}>
            <div className={styles.left}>
                <button>All Products</button>
                <button>Woman</button>
                <button>Man</button>
                <button>Bag</button>
                <button>Shoes</button>
                <button>Watches</button>
            </div>
            <div className={styles.right}>
                <button><FaSearch />search</button>
            </div>
          </div>
        </div>
        <Products />
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
