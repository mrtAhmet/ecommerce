import React, { useState, useEffect } from "react";
import "../css/payment.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  deleteItem,
  removeAll,
  updateQuantity,
} from "../control/itemCartSlice";
import { Link, useNavigate } from "react-router-dom";

function Payment() {
  const today = new Date();
  const twoDaysLater = new Date(today);
  twoDaysLater.setDate(today.getDate() + 2); // Mevcut tarihe 2 gün ekle
  const dispatch = useDispatch();
  const { cartItem, total } = useSelector((store) => store.itemCart);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
  });

  const [formCartValues, setFormCartValues] = useState({
    name: "",
    cardNumber: "",
    cvv: "",
    date: "",
  });

  const [hidden, setHidden] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isCartChange, setIsCartChange] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [paySuccessText, setPaySuccessText] = useState("asdasdsaxx");

  useEffect(() => {
    const storedValues = localStorage.getItem("deliveryAddress");
    if (storedValues) {
      setFormValues(JSON.parse(storedValues));
    }
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function submitDelivery(e) {
    e.preventDefault();
    localStorage.setItem("deliveryAddress", JSON.stringify(formValues));
    setIsChange(false);
  }

  function handleChange() {
    setIsChange(!isChange);
  }

  useEffect(() => {
    const storedValues = localStorage.getItem("cartDetails");
    if (storedValues) {
      setFormCartValues(JSON.parse(storedValues));
    }
  }, []);

  function handleCartInput(e) {
    const { name, value } = e.target;
    setFormCartValues({ ...formCartValues, [name]: value });
  }

  function submitCard(e) {
    e.preventDefault();
    localStorage.setItem("cartDetails", JSON.stringify(formCartValues));
    setIsCartChange(false);
  }

  function handleCartChange() {
    setIsCartChange(!isCartChange);
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      dispatch(deleteItem({ id: itemId, quantity: 1 })); // itemId ve quantity parametrelerini burada iletebilirsin.
      dispatch(calculateTotal());
    } else {
      const updatedCartItems = cartItem.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      dispatch(updateQuantity(updatedCartItems));
      dispatch(calculateTotal());
    }
  };

  function handlePurchase() {
    setHidden(!hidden);
  }

  function confirmPay() {
    setConfirm(!confirm);
    setPaySuccessText("Kart bilgileri kontrol ediliyor...");
    setTimeout(() => {
      setPaySuccessText("Bakiye sorgu tamamlanıyor...");
    }, 1500);
    setTimeout(() => {
      setPaySuccessText("Bankadan yanıt bekleniyor...");
    }, 2500);
    setTimeout(() => {
      setPaySuccessText("Ödeme başarılı ana menüye yönlendiriliyorsunuz");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }, 3500);
    dispatch(removeAll());
  }

  return (
    <div className="paymentMain">
      <div
        className={hidden ? "paymentOverlay active" : "paymentOverlay"}
      ></div>
      <div className="addressSection">
        <h2>Teslimat Adresi</h2>
        <div className="address">
          {isChange ? (
            <form className="inputs" onSubmit={submitDelivery}>
              <input
                type="text"
                name="customerName"
                placeholder="Ad soyad"
                value={formValues.customerName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="addressLine1"
                placeholder="Adres satırı 1 (cadde,mahalle)"
                value={formValues.addressLine1}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="addressLine2"
                placeholder="Adres satırı 2 (Apartman adı, apartman no,daire no)"
                value={formValues.addressLine2}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="addressLine3"
                placeholder="Adres satırı 3 (İl, ilçe)"
                value={formValues.addressLine3}
                onChange={handleInputChange}
              />
              <button type="submit">Kaydet</button>
            </form>
          ) : (
            <ul>
              <li className="customerName">
                {formValues.customerName || "Ad Soyad"}
              </li>
              <li className="addressLine1">
                {formValues.addressLine1 || "Adres Satırı 1"}
              </li>
              <li className="addressLine2">
                {formValues.addressLine2 || "Adres Satırı 2"}
              </li>
              <li className="addressLine3">
                {formValues.addressLine3 || "Adres Satırı 3"}
              </li>
            </ul>
          )}
        </div>
        <button
          style={isChange ? { display: "none" } : { display: "block" }}
          onClick={handleChange}
          className="changeButton"
        >
          Değiştir/Düzenle
        </button>
      </div>
      <div className="paymentMethod">
        <h2>Ödeme Aracı</h2>
        <div className="address">
          {isCartChange ? (
            <form
              className="inputs"
              onSubmit={(e) => {
                e.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

                // Formdaki tüm input değerlerini kontrol et
                if (
                  !formCartValues.name ||
                  !formCartValues.cardNumber ||
                  !formCartValues.cvv ||
                  !formCartValues.date
                ) {
                  alert("Lütfen tüm alanları doldurun."); // Uyarı mesajı göster
                  return; // İşlemi durdur
                }

                // Eğer tüm alanlar doluysa, submitCard fonksiyonunu çalıştır
                submitCard(e);
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Ad soyad"
                value={formCartValues.name}
                onChange={handleCartInput}
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="**** **** **** ****"
                value={formCartValues.cardNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // Sadece sayıları tut
                  value = value.replace(/(.{4})/g, "$1 "); // Her 4 karakterden sonra bir boşluk ekle
                  value = value.trim(); // Sonundaki fazladan boşluğu sil

                  if (value.length <= 19) {
                    handleCartInput({
                      target: {
                        name: e.target.name,
                        value: value,
                      },
                    });
                  }
                }}
              />
              <input
                type="text"
                name="cvv"
                placeholder="999"
                value={formCartValues.cvv}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,3}$/.test(value)) {
                    handleCartInput(e);
                  }
                }}
              />
              <input
                type="text"
                name="date"
                placeholder="YY/MM"
                value={formCartValues.date}
                onChange={(e) => {
                  let value = e.target.value;

                  value = value.replace(/\D/g, "");

                  if (value.length > 2) {
                    value = value.slice(0, 2) + "/" + value.slice(2);
                  }

                  const monthPart = value.split("/")[1];
                  if (
                    monthPart &&
                    (parseInt(monthPart, 10) > 12 || monthPart === "00")
                  ) {
                    value = value.slice(0, -1); // Fazladan girilen rakamı kaldır
                  }

                  if (value.length > 5) {
                    value = value.slice(0, 5);
                  }

                  handleCartInput({
                    target: {
                      name: e.target.name,
                      value: value,
                    },
                  });
                }}
              />
              <button type="submit">Kaydet</button>
            </form>
          ) : (
            <ul>
              <li className="cartName">
                {"Kartın Üstündeki İsim : " + formCartValues.name || "Ad Soyad"}
              </li>
              <li className="cartNumber">
                {"Şu Yöntemle Ödeniyor : " +
                  formCartValues.cardNumber.slice(-4) +
                  " Numarası ile biten kart"}
              </li>
            </ul>
          )}
        </div>
        <button
          style={isCartChange ? { display: "none" } : { display: "block" }}
          onClick={handleCartChange}
          className="changeButton"
        >
          Değiştir/Düzenle
        </button>
      </div>
      <div className="products">
        <div className="arriveDate">
          <h2>Ürünleri ve teslimatı inceleyin</h2>
        </div>
        {cartItem
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div className="productsDetails" key={item.id}>
              <div className="product">
                <img src={item.img} alt={item.title} />
                <div className="productDesc">
                  <p>Ürün: {item.title}</p>
                  <p>Fiyat: {item.price}</p>
                  <p>Adet: {item.quantity}</p>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        <div className="buyNow">
          <h3>Sipariş Toplamı : {total}</h3>
          <div className="buynowButtonSection">
            <button
              className={total > 0 ? "buyButton active" : "buyButton"}
              onClick={handlePurchase}
            >
              Şimdi Al
            </button>
            <Link to="/">
              <button className="backToMain">Ana Menüye Dön</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={hidden ? "hiddenPayment active" : "hiddenPayment"}>
        <div className="hiddenMain">
          {confirm ? (
            <>
              <h3>{paySuccessText}</h3>
            </>
          ) : (
            <>
              <h1>Sipariş Özeti</h1>
              <h3>Alıcı Adı : {formValues.customerName}</h3>
              <p>
                {"Şu Yöntemle Ödeniyor : " +
                  formCartValues.cardNumber.slice(-4) +
                  " Numarası ile biten kart"}
              </p>
              <h3>Gönderim Adresi</h3>
              <p>{formValues.addressLine1}</p>
              <p>{formValues.addressLine2}</p>
              <p>{formValues.addressLine3}</p>
              <h3>Gönderen Firma</h3>
              <p>Murat E-Commerce Anonim Şirketi</p>
              <h3>Tahmini Teslim Tarihi : </h3>
              <p>{twoDaysLater.toLocaleDateString()}</p>
              <div className="confirmButton">
                <button onClick={confirmPay}>Onayla</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
