import { useNavigate } from "react-router";
import CustomButton from "../../components/UI/atoms/CustomButton";
import styles from "./styles-maintenance/maintenance.module.css";

function MaintenancePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚧 Technical work is in progress.</h1>
      <p className={styles.message}>
        We are updating this page to make it better for you. Please check back later.
      </p>
      <p className={styles.signature}>With love, the project team 💚</p>
      <CustomButton style={{backgroundColor:"#00a86b"}} onClick={() => navigate('/')}>Back to Home Page</CustomButton>
    </div>
  );
}

export default MaintenancePage;