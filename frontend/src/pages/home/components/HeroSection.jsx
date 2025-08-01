import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import banner from "../../../assets/img/main-banner.png";

import styles from "./styles-home/home.module.css";


function HeroSection() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const handleRegistration = () => navigate(user ? '/cart' : '/login');
    return (
        <>
            <section className={styles.container}>
                <div className={styles.shop_intro}>
                    <div className={styles.shop_intro_content}>
                        <p className={styles.title_accent}>Welcome to GreenShop</p>
                        <h1 className={styles.title}>Let’s Make a Better <span>Planet</span></h1>
                        <p className={styles.sub_title}>We are an online plant shop offering a wide range of cheap and trendy plants.
                            Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <Button onClick={() => handleRegistration()} className={styles.btn_shop_now} type="primary">SHOP NOW</Button>
                    </div>
                    <div className={styles.shop_intro_banner}>
                        <img src={banner} alt="GreenShop main banner" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection