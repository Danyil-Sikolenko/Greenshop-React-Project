import { Outlet } from "react-router";
import Header from "./header/Header.jsx"
import Footer from "./footer/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./header/style-header/header.module.css";

function Layout() {
  return (
    <div className={styles.page_wrapper}>
      <Header />
      <div className={styles.page_content}>
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        theme="colored"
      />
      <div className={styles.footer}>
          <Footer />
      </div>
    </div>
  );
}
export default Layout



