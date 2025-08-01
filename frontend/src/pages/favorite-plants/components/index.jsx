import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeItem } from "../../../store/slice/favoritePlantsSlice";

import styles from "./styles-favorite-plants/favorite-plants.module.css";

function FavoritePlants() {
    const favoriteItems = useSelector(state => state.favorite);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
      <div className={styles.container}>
      {favoriteItems.length === 0 ? (
        <div className={styles.empty}>
          <p>You don't have any favorite plants yet </p>
          <button className={styles.btnShopNow} onClick={() => navigate('/')}>
            Go to shopping
          </button>
        </div>
      ) : (
        favoriteItems.map(item => (
          <div key={item.id} className={styles.wrapper}> 
            <div className={styles.card}>
            <img src={item.imageUrl} alt={item.title} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.details}>Size: {item.size} | Category: {item.category}</p>
              <p className={styles.price}>Price: {item.price} $</p>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className={styles.removeBtn}
              >
                Delete
              </button>
            </div>
          </div>
          </div>
        ))
      )}
    </div>
        </>
      
    );
}

export default FavoritePlants;
