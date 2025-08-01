import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../profile/components/index.jsx"
import styles from "./style-header/header.module.css";
import logo from "../../../../assets/icon/greenshop_logo_xl.svg";
import { logout } from "../../../../store/slice/authSlice";



function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const cartItems = useSelector(state => state.cart);

    return (
        <div className={styles.header_container}>
            <header>
                <button style={{ border: "none", background: "none" }} onClick={() => navigate('/')} >
                    <img className={styles.logo} src={logo} alt="#" />
                </button>
                <div className={styles.container}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item} >Shop</NavLink>
                            </li>
                             {user ? (<>
                             <li>
                                <NavLink to="/My-chosen-plants" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item} >My Favorite</NavLink>
                            </li>
                             </>) :(
                              <>
                               <li>
                                <NavLink to="/login" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item} >My Favorite</NavLink>
                            </li>
                             </>) }
                            <li>
                                <NavLink to="/blogs" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item} >Blogs</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <NavLink to="/cart"  >
                    <span className={styles.cart_items}>{cartItems.items.length}</span>
                    <span className={styles.cart}></span>
                    </NavLink>
                    {user ? (
                        <>
                        <Profile />
                        </>
                    ) : (
                        <NavLink className={styles.login} to="/login">Login</NavLink>
                    )}
                </div>
            </header>

        </div>
    )
}
export default Header