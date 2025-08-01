import { useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/slice/cartSlice";

import { toast } from 'react-toastify';
import { Flex, Spin } from 'antd';
import styles from "./style-plants-cart/plants_cart.module.css";

function PlantsCart() {
    const plant = useLoaderData(); // это один объект, не массив
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!plant) return <Flex align="center" gap="middle">
        <Spin size="small" />
    </Flex>;

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={plant.imageUrl} alt={plant.title} className={styles.image} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{plant.title}</h1>
                <p className={styles.category}>Category: {plant.category}</p>
                <p className={styles.size}>Size: {plant.size}</p>
                <p className={styles.status}>
                    {plant.status === "new" ? "🆕 New Arrival" : plant.status}
                </p>
                <p className={styles.price}>
                    Price:{" "}
                    <span className={styles.originalPrice}>${plant.price}</span>
                    {plant.discount > 0 && (
                        <span className={styles.discountedPrice}>
                            {/* ${plant.price - plant.discount} */}
                        </span>
                    )}
                </p>
                <button className={styles.button}
                    onClick={() => {
                        dispatch(addItem(plant)),
                            toast.success(`${plant.title} Added to the cart! 🛒`)
                    }}>
                    Add to Cart</button><br />
                <button className={styles.btn_delete}
                    onClick={() => navigate(-1)}>Go Back</button>
            </div>

        </div>
    );
}

export default PlantsCart;

