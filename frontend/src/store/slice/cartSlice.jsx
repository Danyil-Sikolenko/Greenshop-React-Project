import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    items: [], // Массив товаров в корзине
    total: 0,  // Общая сумма всех товаров
  }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Добавление товара в корзину
    addItem: (state, action) => {
      const newItem = action.payload; // Получаем товар из action
      const existingItem = state.items.find(item => item.id === newItem.id); // Проверяем, есть ли уже такой товар

      if (existingItem) {
        existingItem.quantity += 1; // Если товар уже есть — увеличиваем количество
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Если нет — добавляем новый товар с quantity = 1
      }

      state.total += newItem.price; // Увеличиваем общую сумму на цену товара
    },

    // Удаление товара из корзины
    removeItem: (state, action) => {
      const id = action.payload; // Получаем id товара
      const index = state.items.findIndex(item => item.id === id); // Ищем товар по id

      if (index !== -1) {
        const item = state.items[index]; // Получаем сам товар
        state.total -= item.price * item.quantity; // Вычитаем его стоимость из общей суммы
        state.items.splice(index, 1); // Удаляем товар из массива
      }
    },

    // Изменение количества товара
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Получаем id и новое количество
      const item = state.items.find(item => item.id === id); // Ищем товар

      if (item && quantity > 0) {
        state.total -= item.price * item.quantity; // Вычитаем старую сумму
        item.quantity = quantity; // Обновляем количество
        state.total += item.price * item.quantity; // Добавляем новую сумму
      } else if (item && quantity === 0) {
        // Если количество стало 0 — удаляем товар
        state.total -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    // Очистка всей корзины
    clearCart: (state) => {
      state.items = []; // Очищаем массив товаров
      state.total = 0;  // Обнуляем общую сумму
    }
  }
});

// Экспортируем экшены для использования в компонентах
export const { addItem, removeItem, changeQuantity, clearCart } = cartSlice.actions;

// Экспортируем сам reducer для подключения в store
export default cartSlice.reducer;





// const cartSlice = createSlice({
//   name: 'cart',
//   initialState : [],
//   reducers: {
//     addItem: (state, action) => {
//       const item = action.payload;
//       const existing = state.find(i => i.id === item.id);
//       if (existing) {
//         existing.quantity += 1; // увеличиваем количество, если уже есть
//       } else {
//         state.push({ ...item, quantity: 1 });
//       }
//     },
//     removeItem: (state, action) => {
//       return state.filter(item => item.id !== action.payload);
//     },
//     changeQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.find(i => i.id === id);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//     clearCart: () => {
//       return [];
//     }
//   }
// });

// export const { addItem, removeItem, changeQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer