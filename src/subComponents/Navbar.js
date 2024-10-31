import React, { useEffect, useState } from "react";
import "../css/navbar.css";
import { BsFillBasketFill } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { filterItem, filterClassNames } from "../control/itemCartSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const { cartItems, filter } = useSelector((store) => store.itemCart);
  const dispatch = useDispatch();
  const [hiddenBar, setHiddenBar] = useState(false);
  const [search, setSearch] = useState("");
  const [navValue, setNavValue] = useState("");

  function handleHiddenBar() {
    setHiddenBar(!hiddenBar);
  }

  const handleResize = () => {
    if (window.innerWidth > 1000) {
      setHiddenBar(false);
    }
  };

  const detectChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    dispatch(filterItem({ searchValue: search }));
  }, [search, dispatch]);

  useEffect(() => {
    if (search) {
      dispatch(filterItem({ searchValue: search }));
    }
  }, [filter, dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleChange(e) {
    const selectedValue = e.target.value.toLowerCase();
    setNavValue([selectedValue]); // Seçilen değeri dizi olarak ayarla
  }

  useEffect(() => {
    if (navValue != "") {
      dispatch(filterClassNames(navValue));
    }
  }, [navValue]);

  const { quantity } = useSelector((store) => store.itemCart);

  return (
    <nav>
      <div className="navDiv">
        <Link to="/" style={{ textDecoration: "none", marginLeft: "30px" }}>
          <h1 className="mainTitle">Murat E-Commerce Website</h1>
        </Link>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Ürün adı giriniz"
            onChange={detectChange}
          />
        </div>
        <Link to="/cart">
          <div className="cartIcon">
            <BsFillBasketFill className="basketIcon" />
            <p className="count">{quantity}</p>
          </div>
        </Link>

        <div className="menuIcon" onClick={handleHiddenBar}>
          {hiddenBar ? (
            <RxCross1
              className="hamburgerIcon"
              style={{ transition: "transform 0.5s" }}
            />
          ) : (
            <RxHamburgerMenu
              className="hamburgerIcon"
              style={{ transition: "transform 0.5s" }}
            />
          )}
        </div>
      </div>
      <div className={hiddenBar ? "hiddenBar" : "hiddenBarNone"}>
        <div className="navSelect">
          <select name="categories" id="categories" onChange={handleChange}>
            <option value="">Kategoriler</option>
            <option value="Laptop">Laptop</option>
            <option value="Kulaklık">Kulaklık</option>
            <option value="Telefon">Telefon</option>
            <option value="Tablet">Tablet</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Ürün adı giriniz"
          onChange={detectChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;
