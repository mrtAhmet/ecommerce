import { createSlice } from "@reduxjs/toolkit";
import items from "../items";
function formatPrice(value) {
  // Sayıyı string'e çevir
  const stringValue = value.toString();

  // Nokta eklemek için regex kullan
  return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const initialCartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
const initialQuantity = JSON.parse(localStorage.getItem("quantity")) || 0;
const initialTotal = JSON.parse(localStorage.getItem("total")) || 0;

const initialState = {
  cartItems: items,
  quantity: initialQuantity,
  total: initialTotal,
  filteredItems: [],
  lastSearch: "",
  filter: false,
  search: false,
  cartItem: initialCartItem,
  prevItem: [],
  isPop: false,
};

const cartSlice = createSlice({
  name: "itemCart",
  initialState,
  reducers: {
    filterItem: (state, action) => {
      const searchValue = action.payload.searchValue.trim().toLowerCase();
      const searchValueWithoutSpaces = searchValue.replace(/\s+/g, "");

      let deneme;

      if (state.filter === true && state.filteredItems.length > 0) {
        deneme = state.filteredItems.filter((item) => {
          const itemTitle = item.title.toLowerCase();
          const itemTitleWithoutSpaces = itemTitle.replace(/\s+/g, "");
          return (
            itemTitle.includes(searchValue) ||
            itemTitleWithoutSpaces.includes(searchValueWithoutSpaces)
          );
        });
      } else {
        deneme = items.filter((item) => {
          const itemTitle = item.title.toLowerCase();
          const itemTitleWithoutSpaces = itemTitle.replace(/\s+/g, "");
          return (
            itemTitle.includes(searchValue) ||
            itemTitleWithoutSpaces.includes(searchValueWithoutSpaces)
          );
        });
      }

      state.cartItems = deneme.length === 0 ? [] : deneme;
      state.lastSearch = searchValue;
      state.filter = true;
    },
    filterClassNames: (state, action) => {
      const categories = action.payload;
      state.filteredItems = items.filter((item) =>
        categories.includes(item.itemClass)
      );
      state.cartItems = state.filteredItems;
      state.filter = true;

      if (state.lastSearch) {
        const searchValueWithoutSpaces = state.lastSearch.replace(/\s+/g, "");
        state.cartItems = state.filteredItems.filter((item) => {
          const itemTitle = item.title.toLowerCase();
          const itemTitleWithoutSpaces = itemTitle.replace(/\s+/g, "");
          return (
            itemTitle.includes(state.lastSearch) ||
            itemTitleWithoutSpaces.includes(searchValueWithoutSpaces)
          );
        });
      }
    },
    filterReset: (state) => {
      state.cartItems = items;
      state.filteredItems = [];
      state.filter = false;
      state.lastSearch = "";
    },
    increaseCount: (state, action) => {
      // cartItems dizisinde item'ı bul ve quantity'yi artır
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity += 1;
      }

      // cartItem dizisinde de aynı id'ye sahip item varsa onun da quantity'sini artır
      const itemInCart = state.cartItem.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      }

      // Genel quantity değerini artır
      state.quantity += 1;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    decreaseCount: (state, action) => {
      // cartItems dizisinde item'ı bul ve quantity'yi artır
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity -= 1;
      }

      // cartItem dizisinde de aynı id'ye sahip item varsa onun da quantity'sini artır
      const itemInCart = state.cartItem.find(
        (item) => item.id === action.payload
      );
      if (itemInCart && itemInCart.quantity > 0) {
        itemInCart.quantity -= 1;
      }
      // Genel quantity değerini artır
      state.quantity -= 1;

      state.cartItem = state.cartItem.filter((item) => item.quantity !== 0);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    getItem: (state, action) => {
      const existingItem = state.cartItem.find(
        (anItem) => anItem.id === action.payload.id
      );

      if (existingItem) {
        // Eğer aynı id'ye sahip bir eşya zaten listede varsa, quantity değerini artır
        existingItem.quantity += 1;
      } else {
        // Eğer aynı id'ye sahip bir eşya yoksa, action.payload'ı ekle ve quantity'yi 1 yap
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += 1;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    deleteItem: (state, action) => {
      console.log(action.payload.id);
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.quantity -= action.payload.quantity;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItem.forEach((item) => {
        total += item.quantity * item.price.replace(/\./g, "");
      });
      // Toplam değeri virgülden sonra 3 basamakla gösterilecek şekilde saklayın
      state.total = formatPrice(total);
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    removeAll: (state) => {
      state.cartItem = [];
      state.quantity = 0;
      state.total = 0;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    popItem: (state, action) => {
      console.log(action.payload);
      state.prevItem = state.cartItems.filter(
        (item) => item.id === action.payload
      );
      console.log(state.prevItem);
    },
    handlePopParam: (state) => {
      state.isPop = !state.isPop;
    },
    updateQuantity: (state, action) => {
      let totalQuantity = 0;
      action.payload.forEach((updatedItem) => {
        const existingItem = state.cartItem.find(
          (item) => item.id === updatedItem.id
        );
        if (existingItem && existingItem.quantity !== updatedItem.quantity) {
          existingItem.quantity = updatedItem.quantity;
        }
        totalQuantity += updatedItem.quantity;
      });
      state.quantity = totalQuantity;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
  },
});

export const {
  filterItem,
  filterClassNames,
  filterReset,
  increaseCount,
  getItem,
  decreaseCount,
  deleteItem,
  calculateTotal,
  removeAll,
  popItem,
  handlePopParam,
  updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
