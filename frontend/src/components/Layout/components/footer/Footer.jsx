
import facebo0kIcon from "../../../../assets/icon/Facebook.png";
import instagramIcon from "../../../../assets/icon/instagram.png";
import linkidinIcon from "../../../../assets/icon/Linkidin.png";
import twitterIcon from "../../../../assets/icon/Twitter.png";
import youtubeIcon from "../../../../assets/icon/Youtube.png";
import payCardsIcon from "../../../../assets/icon/pay_cards.png";
import styles from "./style-footer/footer.module.css";


function Footer() {
    return (
        <footer style={{ maxWidth: "1200px", margin: "auto" }}>
            <div className={styles.footer_section}>
                <div className={styles.footer_list_account}>
                    <h4><span>My</span> Account</h4>
                    <ul>
                        <li>
                            <a href="#">My Account</a>
                        </li>
                        <li>
                            <a href="#">Our stores</a>
                        </li>
                        <li>
                            <a href="#"> Contact us</a>
                        </li>
                        <li>
                            <a href="#"> Career</a>
                        </li>
                        <li>
                            <a href="#"> Specials</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer_list_guide}>
                    <h4>Help & Guide</h4>
                    <ul>
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">How to Buy</a>
                        </li>
                        <li>
                            <a href="#">Shipping & Delivery</a>
                        </li>
                        <li>
                            <a href="#">Product Policy</a>
                        </li>
                        <li>
                            <a href="#">How to Return</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer_list_categories}>
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <a href="">House Plants</a>
                        </li>
                        <li>
                            <a href="">Potter Plants</a>
                        </li>
                        <li>
                            <a href="">Seeds</a>
                        </li>
                        <li>
                            <a href="">Small Plants</a>
                        </li>
                        <li>
                            <a href="">Accessories</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_list_media}>
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                            <a  target="_blank" href=""><img src={facebo0kIcon} alt="#" /></a>
                        </li>
                         <li>
                            <a  target="_blank" href=""><img src={instagramIcon} alt="#" /></a>
                        </li>
                         <li>
                            <a  target="_blank" href=""><img src={linkidinIcon} alt="#" /></a>
                        </li>
                         <li>
                            <a  target="_blank" href=""><img src={twitterIcon} alt="#" /></a>
                        </li>
                         <li>
                            <a  target="_blank" href=""><img src={youtubeIcon} alt="#" /></a>
                        </li>
                    </ul>
                    <h4>We accept</h4>
                    <a href=""><img src={payCardsIcon} alt="#" /></a>
                </div>

            </div>
        </footer>
    )
}
export default Footer