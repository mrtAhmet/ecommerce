import React, { useState } from "react";
import "../css/listedItems.css";
import {
  calculateTotal,
  getItem,
  handlePopParam,
  increaseCount,
  popItem,
} from "../control/itemCartSlice";
import { useDispatch } from "react-redux";
function ListedItems({ id, itemClass, title, price, img, quantity }) {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  function handlePop() {
    dispatch(popItem(id));
    dispatch(handlePopParam());
  }

  function handleAlert() {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
    dispatch(getItem({ id, title, price, img, quantity }));
    dispatch(calculateTotal());
  }
  return (
    <div className="cartItem">
      <div className="cartImg">
        <img src={img} onClick={handlePop} />
      </div>
      <div className="cartDetails">
        <p>{title}</p>
        <p>{price} TL</p>
        <button onClick={handleAlert}>Sepete Ekle</button>
      </div>
      {showAlert && <div className="alert">Ürün sepete eklendi!</div>}
    </div>
  );
}

export default ListedItems;
