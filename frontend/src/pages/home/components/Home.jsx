import { useState } from "react";
import HeroSection from "./HeroSection";
import CategoryMenu from "./CategoryMenu";
import CardsPlant from "./CardsPlant";
import PlantsStatusMenu from "./PlantsStatusMenu";
import FlowerNewsSection from "./FlowerNewsSection";
import PageEndSection from "./PageEndSection";
import styles from "./styles-home/home.module.css";

function Home() {
  const [activeCategory, setActiveCategory] = useState(null); // початкові значення які ми потім передаємо пропсами далі по сторінці 
  const [activeSize, setActiveSize] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);

  return (
    <div className={styles.page_content}>
      <HeroSection />
      <section className={styles.shop_section}>
        <CategoryMenu
          activeCategory={activeCategory} //це все для сортування товару та для відображення його на сторінці
          setActiveCategory={setActiveCategory}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
        />
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: "90px" }}>
          <PlantsStatusMenu
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
          />
          <CardsPlant
            activeCategory={activeCategory}
            activeSize={activeSize}
            activeStatus={activeStatus}
          />
        </div>
      </section>
      <section>
        <FlowerNewsSection />
      </section>
      <section>
        <PageEndSection />
      </section>
      {/* <Training/> */}

    </div>
  );
}
export default Home;














// ✅ Шаг 1: Поднять состояние фильтра вверх
// Твой компонент CategoryMenu хранит activeCategory и activeSize локально. Чтобы CardsPlant мог использовать эти значения для фильтрации, нужно:

// Поднять состояние в родительский компонент (например, HomePage)

// Или использовать Redux для хранения фильтров

// Для простоты начнем с подъема состояния.





// ✅ Шаг 3: Обнови CategoryMenu для работы с пропсами
// jsx
// function CategoryMenu({ activeCategory, setActiveCategory, activeSize, setActiveSize }) {
//   ...
// }


// Шаг 4: Фильтрация в CardsPlant
// Добавь фильтрацию перед items.map():

// jsx
// const filteredItems = items.filter((plant) => {
//   const matchCategory = activeCategory ? plant.category === activeCategory : true;
//   const matchSize = activeSize ? plant.size === activeSize : true;
//   return matchCategory && matchSize;
// });
// И замени items.map(...) на filteredItems.map(...).