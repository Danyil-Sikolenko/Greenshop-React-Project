
import CustomButton from "../../../components/UI/atoms/CustomButton";
import logo from "../../../assets/icon/greenshop_logo_xl.svg";
import decorativeBanner1 from "../../../assets/img/basement_1.png";
import decorativeBanner2 from "../../../assets/img/basement_2.png";
import decorativeBanner3 from "../../../assets/img/basement_3.png";

import styles from "./styles-home/home.module.css";


function PageEndSection() {
    return (
        <>
            <div className={styles.page_end_section}>
                <div className={styles.page_end_cards}>
                    <img src={decorativeBanner1} alt="#" />
                    <h4>Garden Care</h4>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className={styles.page_end_cards}>
                    <img src={decorativeBanner2} alt="#" />
                    <h4>Plant Renovation</h4>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className={styles.page_end_cards}>
                    <img src={decorativeBanner3} alt="#" />
                    <h4>Watering Graden</h4>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className={styles.page_end_promo}>
                    <h4>Would you like to join newsletters?</h4>
                    <input type="text" placeholder="enter your email address..." />
                    <CustomButton>Join</CustomButton>
                    <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination.
                        We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                </div>
            </div>
            <div className={styles.page_end_section_contacts}>
                <ul className={styles.page_end_section_contacts_list}>
                    <li>
                        <a href="#">
                            <img src={logo} alt="#" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            70 West Buckingham Ave.<br/>
                            Farmingdale, NY 11735
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            contact@greenshop.com
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            +88 01911 717 490
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default PageEndSection