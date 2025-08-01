import { useNavigate } from "react-router";
import CustomButton from "../../../components/UI/atoms/CustomButton";

import summerFlowerBanner from "../../../assets/img/Summer_flower_banner.png";
import trendFlowerBanner from "../../../assets/img/trend_flower_banner.png";
import cardBlogs1 from "../../../assets/img/blog_card_01.jpg";
import cardBlogs2 from "../../../assets/img/blog_card_02.jpg";
import cardBlogs3 from "../../../assets/img/blog_card_03.jpg";
import cardBlogs4 from "../../../assets/img/blog_card_04.jpg";

import styles from "./styles-home/home.module.css";

function FlowerNewsSection() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container_garden_journal}>
                <div className={styles.seasonal_flowers}>
                    <img src={summerFlowerBanner} alt="#" />
                    <div>
                        <h4>Summer cactus & succulents</h4>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <CustomButton className={styles.garden_journal_btn_more} onClick={() => navigate('/blogs')}>Find More </CustomButton>
                    </div>
                </div>
                <div className={styles.trend_flowers}>
                    <div className={styles.trend_flowers}>
                        <img src={trendFlowerBanner} alt="#" />
                        <div>
                            <h4>Styling Trends &<br /> much more</h4>
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                            <CustomButton className={styles.garden_journal_btn_more} onClick={() => navigate('/blogs')}>Find More </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container_garden_posts}>
                <h2>Our Blog Posts</h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <div className={styles.container_garden_posts_cards}>
                    <div className={styles.content_blog_post}>
                        <img src={cardBlogs1} alt="#" />
                        <div className={styles.content_blog_post_text}>
                            <span>September 12  I Read in 6 minutes</span>
                            <h4>Cactus & Succulent <br/> Care Tips</h4>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <button onClick={() => navigate('/blogs')}>Read More</button>
                        </div>
                    </div>
                    <div className={styles.content_blog_post}>
                        <img src={cardBlogs2} alt="#" />
                        <div className={styles.content_blog_post_text}>
                            <span>September 12  I Read in 6 minutes</span>
                            <h4>Cactus & Succulent <br/> Care Tips</h4>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <button onClick={() => navigate('/blogs')}>Read More</button>
                        </div>
                    </div>
                    <div className={styles.content_blog_post}>
                        <img src={cardBlogs3} alt="#" />
                        <div className={styles.content_blog_post_text}>
                            <span>September 12  I Read in 6 minutes</span>
                            <h4>Cactus & Succulent <br/> Care Tips</h4>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <button onClick={() => navigate('/blogs')}>Read More</button>
                        </div>
                    </div>
                    <div className={styles.content_blog_post}>
                        <img src={cardBlogs4} alt="#" />
                        <div className={styles.content_blog_post_text}>
                            <span>September 12  I Read in 6 minutes</span>
                            <h4>Cactus & Succulent <br/> Care Tips</h4>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <button onClick={() => navigate('/blogs')}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlowerNewsSection