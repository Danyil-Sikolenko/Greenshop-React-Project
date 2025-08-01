import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeItem, changeQuantity } from "../../../store/slice/cartSlice.jsx";
import logo from "../../../assets/icon/greenshop_logo_xl.svg";
import styles from "./styles-cart/cart.module.css";

function Cart() {
    const { items, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={styles.cart_container}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2>🛍 Your cart</h2>
                <button className={styles.btn_logo} onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" />
                </button>
            </div>

            {items.length === 0 ? (
                <div>
                    <p>The cart is empty</p>
                    <button className={styles.btn_shop_now} onClick={() => navigate('/')}>Shop now</button>
                </div>
            ) : (
                <>
                    {items.map(item => (
                        <div key={item.id} className={styles.cart_item}>
                            <img src={item.imageUrl} alt={item.title} className={styles.cart_image} />
                            <div className={styles.cart_info}>
                                <h3>{item.title}</h3>
                                <p>Size: {item.size} | Category: {item.category}</p>
                                <p>Price: {item.price} $</p>
                                <p>Subtotal: {item.price * item.quantity} $</p>

                                <div className={styles.quantity_controls}>
                                    <button
                                        onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                        disabled={item.quantity <= 1}
                                    >−</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                    >+</button>
                                </div>

                                <button onClick={() => dispatch(removeItem(item.id))} className={styles.remove_btn}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className={styles.total_section}>
                        <h3>Total:{total} $</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;




// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { removeItem, changeQuantity } from "../../../store/slice/cartSlice.jsx";
// import logo from "../../../assets/icon/greenshop_logo_xl.svg"
// import styles from "./styles-cart/cart.module.css";

// function Cart() {
//     const cartItems = useSelector(state => state.cart);
//     console.log(cartItems)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     return (
//         <div className={styles.cart_container}>
//             <div style={{display:"flex", alignItems:"center" ,justifyContent:"space-between"}}>
//                   <h2>🛍 Your cart</h2>
//                 <button className={styles.btn_logo} onClick={() => navigate('/')}>
//                     <img src={logo} alt="logo" />
//                 </button>
//             </div>

//             {cartItems.length === 0 ? (
//                 <div>
//                     <p>The cart is empty</p> 
//                    <button
//                     className={styles.btn_shop_now}
//                      onClick={() => navigate('/')}>Shop now</button>
//                 </div>

//             ) : (
//                 cartItems.map(item => (
//                     <div key={item.id} className={styles.cart_item}>
//                         <img src={item.imageUrl} alt={item.title} className={styles.cart_image} />
//                         <div className={styles.cart_info}>
//                             <h3>{item.title}</h3>
//                             <p>Size: {item.size} | Category: {item.category}</p>
//                             <p>Price: {item.price} $</p>

//                             <div className={styles.quantity_controls}>
//                                 <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
//                             </div>

//                             <button onClick={() => dispatch(removeItem(item.id))} className={styles.remove_btn}>
//                                 Delete
//                             </button>
//                             {/* <p>Товаров в корзине: {cartItems.length}</p> */}
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Cart;










