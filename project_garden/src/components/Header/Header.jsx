// import React, { useState } from "react";
// import NavMenu from "../NavMenu/NavMenu";
// import styles from "./Header.module.css";
// import iconTree from "../../images/Header/tree.svg";
// import iconHeart from "../../images/Header/heart.svg";
// import iconBag from "../../images/Header/bag.svg";
// import modeNight from "../../images/Header/modeNight.svg";
// import modeDay from "../../images/Header/modeDay.svg";
// import { useDispatch, useSelector } from "react-redux"
// import {toggleTheme} from "../../store/slices/themeSlice"
// import { Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Header = () => {
//   const dispatch = useDispatch();
//   const { theme } = useSelector(
//     (state) => state.theme
//   );
//   const [isMenuOpen, setIsMenuOpen] =
//     useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
// 		<header
// 			className={`${styles.header}, ${theme === "dark" ? styles.dark : ""} `}
// 		>
// 			<div className='container'>
// 				<div className={styles.wrapper}>
// 					<div className={styles.logoBlock}>
// 						<img src={iconTree} alt='Logo' className={styles.logo} />
// 						<img
// 							src={theme === "dark" ? modeNight : modeDay}
// 							className={styles.switch}
// 							alt='Change theme'
// 							onClick={() => dispatch(toggleTheme())}
// 						/>
// 					</div>
// 					<div
// 						className={`${styles.hideMenu} ${isMenuOpen ? styles.open : ""}`}
// 					>
// 						<NavMenu />
// 					</div>

// 					<div className={styles.cartBlock}>
// 						<Link to='/favorites_products'>
// 							<img src={iconHeart} alt='Like' />
// 						</Link>
// 						<Link to='/cart'>
// 							<img src={iconBag} alt='Bag' />
// 						</Link>
// 						<RxHamburgerMenu
// 							className={styles.burger}
// 							onClick={toggleMenu}
// 							style={{
// 								height: "3em",
// 								width: "3em",
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;

import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";
import iconTree from "../../images/Header/tree.svg";
import iconHeart from "../../images/Header/heart.svg";
import iconBag from "../../images/Header/bag.svg";
import modeNight from "../../images/Header/modeNight.svg";
import modeDay from "../../images/Header/modeDay.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { productsInCart = [] } = useSelector((store) => store.cart);
  //const { likedProducts = [] } = useSelector((store) => store.likes);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoBlock}>
            <img src={iconTree} alt="Logo" className={styles.logo} />
            <img
              src={theme === "dark" ? modeNight : modeDay}
              className={styles.switch}
              alt="Change theme"
              onClick={() => dispatch(toggleTheme())}
            />
          </div>
          <div className={`${styles.hideMenu} ${isMenuOpen ? styles.open : ""}`}>
            <NavMenu />
          </div>

          <div className={styles.cartBlock}>
            <Link to="/favorites_products" className={styles.iconLink}>
              <img src={iconHeart} alt="Like" />
              {/* {likedProducts.length > 0 && (
                <span className={styles.badgeCount}>{likedProducts.length}</span>
              )} */}
            </Link>
            <Link to="/cart" className={styles.iconLink}>
              <img src={iconBag} alt="Bag" />
              {productsInCart.length > 0 && (
                <span className={styles.badgeCount}>{productsInCart.length}</span>
              )}
            </Link>
            <RxHamburgerMenu
              className={styles.burger}
              onClick={toggleMenu}
              style={{
                height: "3em",
                width: "3em",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

