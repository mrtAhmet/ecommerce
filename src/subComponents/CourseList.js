import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListedItems from "./ListedItems";
import "../css/courseList.css";
import CourseSide from "./CourseSide";
import NoneListed from "./NoneListed";
import {
  handlePopParam,
  getItem,
  calculateTotal,
} from "../control/itemCartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const { cartItems, quantity, total, isPop, prevItem } = useSelector(
    (store) => store.itemCart
  );

  function closePop() {
    dispatch(handlePopParam());
  }

  function handlePop() {
    setShowAlert(!showAlert);
    setTimeout(() => setShowAlert(false), 2500);
    dispatch(
      getItem({
        id: prevItem[0].id,
        title: prevItem[0].title,
        price: prevItem[0].price,
        img: prevItem[0].img,
        quantity: prevItem[0].quantity,
      })
    );
    dispatch(calculateTotal());
  }

  return (
    <section className="cart">
      {/* Pop-up aktif olduğunda arka plana blur efekti eklemek için overlay */}
      <div className={isPop ? "overlay active" : "overlay"}></div>

      <div
        className={isPop && prevItem.length > 0 ? "imagePop" : "imagePopNone"}
      >
        <div className="popHeader">
          <p onClick={closePop}>x</p>
        </div>
        {prevItem.length > 0 && (
          <div className="popImage">
            <img src={prevItem[0].img} alt={prevItem[0].title} />
          </div>
        )}
        {prevItem.length > 0 && (
          <div
            className="popDetails"
            style={{ paddingBottom: showAlert ? "0px" : "15px" }}
          >
            <p style={{ marginBottom: "10px" }}>{prevItem[0].title}</p>
            <p>{prevItem[0].price}TL</p>
            <button onClick={handlePop}>Sepete Ekle</button>
            {showAlert && <div className="popAlert">Ürün sepete eklendi!</div>}
          </div>
        )}
      </div>

      <div className="mainListed">
        {cartItems.map((item) => {
          return item.title.length !== 0 ? (
            <ListedItems key={item.id} {...item} />
          ) : (
            <NoneListed />
          );
        })}
      </div>

      <div className="sideMain">
        <CourseSide />
      </div>
    </section>
  );
}

export default CourseList;
