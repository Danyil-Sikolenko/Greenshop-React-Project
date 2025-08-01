import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPlants } from '../../../store/thunk/plantsThunk.jsx';
import { addItem } from '../../../store/slice/cartSlice.jsx';
import { addItemLike } from '../../../store/slice/favoritePlantsSlice.jsx';
import {
  SearchOutlined,
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Card, Spin } from 'antd';
import { toast } from 'react-toastify';

import styles from "./styles-home/home.module.css";

function CardsPlant({ activeCategory, activeSize, activeStatus }) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.plants);
  const likedPlants = useSelector(state => state.favorite);

  const filteredItems = items.filter((plant) => {
    const matchCategory = activeCategory ? plant.category === activeCategory : true;
    const matchSize = activeSize ? plant.size === activeSize : true;
    const matchStatus =
      !activeStatus || activeStatus === "all"
        ? true
        : activeStatus === "new"
          ? plant.status === "new"
          : activeStatus === "sold"
            ? plant.status === "sold"
            : true;
    return matchCategory && matchSize && matchStatus;
  });

  useEffect(() => {
    dispatch(getAllPlants());
  }, [dispatch]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    toast.success(`${plant.title} Added to the cart! 🛒`);
  };

  const handleToggleFavorite = (plant) => {
    dispatch(addItemLike(plant));
    toast.success(`${plant.title} added to favorites 💖`);
  };

  const handleNavigate = (id) => {
    navigate(`/plant/${id}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

      {loading ? (
        <Spin size="large" tip="Loading plants..." style={{ marginTop: '2rem' }}>
          <div style={{ height: '200px' }} />
        </Spin>
      ) : error ? (
        <p style={{ color: 'red' }}>Error loading plants: {error}</p>
      ) : (
        <div className={styles.card_container}>
          {filteredItems.map((plant) => {
            const isLiked = likedPlants.some(item => item.id === plant.id);

            return (
              <Card
                key={plant.id}
                bodyStyle={{ padding: '16px' }}
                className={styles.card}
                cover={
                  <img
                    src={plant.imageUrl}
                    alt={plant.title}
                    style={{ width: "100%" }}
                  />
                }
              >
                <div style={{ flexGrow: 1 }}>
                  <Meta
                    title={plant.title}
                    description={
                      <>
                        Size: {plant.size} <br />
                        Category: {plant.category}
                      </>
                    }
                  />
                  <p style={{ marginTop: '1rem', marginBottom: 0 }}>
                    Price: <strong>{plant.price} $</strong>
                  </p>
                </div>

                <ul className={styles.card_list_btn}>
                  <li>
                    <button className={styles.card_list_btn_item}
                      onClick={() => handleAddToCart(plant)}>
                      <ShoppingCartOutlined style={{ fontSize: '20px', color: '#1890ff' }} />
                    </button>
                  </li>
                  <li>
                    <button className={styles.card_list_btn_item}
                      onClick={() => handleToggleFavorite(plant)}>
                      {isLiked ? (
                        <HeartFilled style={{ fontSize: '20px', color: '#eb2f96' }} />
                      ) : (
                        <HeartOutlined style={{ fontSize: '20px', color: '#eb2f96' }} />
                      )}
                    </button>
                  </li>
                  <li>
                    <button className={styles.card_list_btn_item}
                      onClick={() => handleNavigate(plant.id)}>
                      <SearchOutlined style={{ fontSize: '20px', color: '#595959' }} />
                    </button>
                  </li>
                </ul>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CardsPlant;
