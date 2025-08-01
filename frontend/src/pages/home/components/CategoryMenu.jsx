import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "../../../store/thunk/plantsThunk";

import saleBanner from "../../../assets/img/Super_Sale_Banner.jpg"
import styles from "./styles-home/home.module.css";

function CategoryMenu({ activeCategory, setActiveCategory, activeSize, setActiveSize }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPlants());
    }, [dispatch]);

    const { categoriesCount, sizePlantsCount } = useSelector(state => state.plants);

    const categoriesArray = Object.entries(categoriesCount)
        .map(([category, count]) => ({ category, count }));

    const sizeArray = Object.entries(sizePlantsCount)
        .map(([size, count]) => ({ size, count }));

    return (
        <>
        <div className={styles.menu_categories}>
            <h4 className={styles.title_categories}>Categories</h4>
            <ul className={styles.list_categories}>
                {categoriesArray.map(({ category, count }) => (
                    <li className={styles.list_categories_item} key={category}>
                        <button
                            className={`${styles.button_item} ${activeCategory === category ? styles.active : ""}`}
                            onClick={() => {
                                setActiveCategory( prev => prev === category ? null : category)} //якщо іде другий клік по вибраної властивості то ми робимо сброс до налл
                            }
                        >
                            <span className={styles.label}>{category}</span>
                            <span className={styles.count}>({count})</span>
                        </button>
                    </li>
                ))}
            </ul>
            <h4 className={styles.title_size}>Size</h4>
            <ul className={styles.list_size}>
                {sizeArray.map(({ size, count }) => (
                    <li className={styles.list_size_item} key={size}>
                        <button
                            className={`${styles.button_item} ${activeSize === size ? styles.active : ""}`}
                            onClick={() => {
                                setActiveSize(prev => prev === size ? null : size)} //якщо іде другий клік по вибраної властивості то ми робимо сброс до налл
                            } 
                        >
                            <span className={styles.label}>{size}</span>
                            <span className={styles.count}>({count})</span>
                        </button>
                    </li>
                ))}
            </ul>
             <a href="#">
                  <img src={saleBanner} alt="sale-banner" />
            </a>
        </div>
        </>
    );
}

export default CategoryMenu;













// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./styles-home/home.module.css";
// import { getAllPlants } from "../../../store/thunk/plantsThunk";

// function CategoryMenu() {
//     const [activeCategory, setActiveCategory] = useState(null);
//     const [activeSize , setActiveSize] = useState(null);

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllPlants())
//     }, [dispatch])

//     const { categoriesCount, sizePlantsCount } = useSelector(state => state.plants);
//     console.log(categoriesCount)
//     console.log(sizePlantsCount)

//     const categoriesArray = Object.entries(categoriesCount)
//         .map(([category, count]) => ({
//             category,
//             count
//         }));
//     const sizeArray = Object.entries(sizePlantsCount)
//         .map(([size, count]) => ({
//             size,
//             count
//         }));
//     console.log(sizeArray)


//     return (
//         <>
//             <div className={styles.menu_categories}>
//                 <h4 className={styles.title_categories}>Categories</h4>
//                 <ul className={styles.list_categories}>
//                     {categoriesArray.map(({ category, count }) => (
//                         <li className={styles.list_categories_item} key={category}>
//                             <button className={`${styles.button_item} ${activeCategory === category ? styles.active : ""}`}
//                                 onClick={() => setActiveCategory(category) }
//                             >
//                                 <span className={styles.label}>{category}</span>
//                                 <span className={styles.count}>({count})</span>
//                             </button>
//                         </li>
//                     ))}
//             </ul>
//             <h4 className={styles.title_size}>Size</h4>
//             <ul className={styles.list_size}>
//                 {sizeArray.map(({ size, count }) => (
//                     <li className={styles.list_size_item} key={size}>
//                         <button className={`${styles.button_item} ${activeSize === size ? styles.active : ""}`}
//                                 onClick={() => setActiveSize(size) }
//                             >
//                                 <span className={styles.label}>{size}</span>
//                                 <span className={styles.count}>({count})</span>
//                             </button>
//                     </li>
//                 ))}
//             </ul>
//         </div >
//         </>
//     )
// }
// export default CategoryMenu



















// 💡 Эта функция берёт объект categoriesCount и превращает его в массив пар [ключ, значение].

// Пример:

// js
// const categoriesCount = {
//   "House Plants": 2,
//   "Seeds": 1,
//   "Small Plants": 5
// };
// После Object.entries(categoriesCount) ты получишь:

// js
// [
//   ["House Plants", 2],
//   ["Seeds", 1],
//   ["Small Plants", 5]
// ]
// 2. .map(([category, count]) => ({ category, count }))
// ✅ Метод .map() проходит по каждому элементу массива (т.е. по каждой паре [ключ, значение]).

// Внутри map используется деструктуризация массива: [category, count] означает, что category = ключ, а count = значение.

// Затем он возвращает новый объект:

// js
// {
//   category: "House Plants",
//   count: 2
// }
// И так для каждой категории — создаётся массив таких объектов.

// 💾 В итоге categoriesArray будет выглядеть так:
// js
// [
//   { category: "House Plants", count: 2 },
//   { category: "Seeds", count: 1 },
//   { category: "Small Plants", count: 5 }
// ]