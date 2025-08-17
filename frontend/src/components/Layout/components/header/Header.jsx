import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../profile/components/index.jsx";
import styles from "./style-header/header.module.css";
import logo from "../../../../assets/icon/greenshop_logo_xl.svg";
import { logout } from "../../../../store/slice/authSlice";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const cartItems = useSelector(state => state.cart);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <div className={styles.header_container}>
            <header className={styles.header}>
                <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✖' : '☰'}
                </button>
                <button
                    style={{ border: "none", background: "none" }}
                    onClick={() => {
                        navigate('/');
                        setMenuOpen(false);
                    }}
                >
                    <img className={styles.logo} src={logo} alt="Logo" />
                </button>

                <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" onClick={handleNavClick} className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={user ? "/My-chosen-plants" : "/login"} onClick={handleNavClick} className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>My Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" onClick={handleNavClick} className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>Blogs</NavLink>
                        </li>
                        {user && (
                            <li className={styles.profile_mobile}>
                                <Profile />
                            </li>
                        )}
                    </ul>
                </nav>

                <div className={styles.right}>
                    <NavLink to="/cart" onClick={handleNavClick}>
                        <span className={styles.cart_items}>{cartItems.items.length}</span>
                        <span className={styles.cart}></span>
                    </NavLink>
                    {user ? <Profile /> : <NavLink className={styles.login} to="/login" onClick={handleNavClick}>Login</NavLink>}
                </div>
            </header>
        </div>
    );
}

export default Header;









