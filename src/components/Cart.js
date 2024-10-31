import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/cart.css";
import { useNavigate } from "react-router-dom";
import SelectedItems from "./SelectedItems";
import { removeAll } from "../control/itemCartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItem, total, quantity } = useSelector((store) => store.itemCart);
  const [purchase, setPurchase] = useState(false);
  const [purchaseConfirm, setPurchaseConfirm] = useState(false);
  const navigate = useNavigate();
  const backToShopping = () => {
    navigate("/");
  };
  const dispatch = useDispatch();

  function handlePurchase() {
    if (quantity > 0) {
      setPurchase(!purchase);
    } else {
      alert("Sepete ürün ekleyin!");
    }
  }

  // function handleConfirm() {
  //   setPurchaseConfirm(!purchaseConfirm);
  //   setTimeout(() => {
  //     alert("Ödeme işlemi başarıyla gerçekleşti!");
  //     setPurchaseConfirm(!purchaseConfirm);
  //     setPurchase(!purchase);
  //     dispatch(removeAll());
  //   }, 2000);
  // }

  return (
    <>
      <div className="cartContainer">
        <div className="cartMain">
          {quantity < 1 ? (
            <div className="emptyCart">
              <p>Sepetiniz boş</p>
              <button onClick={backToShopping}>
                Alışverişe Devam Etmek için tıklayınız
              </button>
            </div>
          ) : (
            cartItem.map((item) => {
              return <SelectedItems key={item.id} {...item} />;
            })
          )}
        </div>
        <div className="selectedMain">
          <div className="shoppingDetails">
            <p className="totalCount">Ara Toplam({quantity} ürün) : </p>
            <p className="totalPrice">{total} TL</p>
            <button
              onClick={handlePurchase}
              style={
                quantity < 1
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "purple", cursor: "pointer" }
              }
            >
              Alışverişi Tamamla
            </button>
          </div>
        </div>
      </div>
      <div className={purchase ? "purchase" : "purchaseNone"}>
        <div className="purchaseButton">
          <button onClick={handlePurchase}>X</button>
        </div>
        {purchaseConfirm ? (
          <div className="purchaseContent">
            <p>Ödeme İşlemi Yapılıyor...</p>
          </div>
        ) : (
          <div className="purchaseContent">
            <p className="contentText">Alışverişi tamamlamak istiyor musun?</p>
            <p>Ara Toplam({quantity} ürün) : </p>
            <p>Tutar (KDV dahil) : {total} TL</p>
            <Link to="/payment">
              <button className="submitButton">Evet</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
