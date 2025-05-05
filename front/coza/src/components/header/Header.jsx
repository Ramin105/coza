import React from "react";
import styles from "./Header.module.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img
              src="	https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
              alt=""
            />
          </div>
          <div className={styles.navbar}>
            <button>Home</button>
            <button>Shop</button>
            <button>Features</button>
            <button>Blog</button>
            <button>About</button>
            <button>Contact</button>
          </div>
        </div>
        <div className={styles.icons}>
          <FaSearch /><FaShoppingCart/><MdFavorite />
        </div>
      </div>
    </div>
  );
};

export default Header;
