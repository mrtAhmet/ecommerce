import Cart from "../components/Cart";
import MainPage from "../components/MainPage";
import Payment from "../components/Payment";

export const routerList = [
  { id: 1, path: "/", element: <MainPage /> },
  { id: 2, path: "/cart", element: <Cart /> },
  { id: 3, path: "/payment", element: <Payment /> },
];
