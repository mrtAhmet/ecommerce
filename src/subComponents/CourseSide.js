import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/side.css";
import { filterClassNames, filterReset } from "../control/itemCartSlice";

function CourseSide() {
  const ulRef = useRef(null);
  const [listedValue, setListedValue] = useState([]);
  const { cartItems } = useSelector((store) => store.itemCart);
  const dispatch = useDispatch();

  function changeColor(target) {
    if (target.style.color === "red") {
      target.style.color = "black";
    } else {
      target.style.color = "red";
    }
  }

  function setColorBlack() {
    if (ulRef.current) {
      const liElements = ulRef.current.querySelectorAll("li");
      liElements.forEach((li) => {
        li.style.color = "black";
      });
    }
  }

  function writeValue(e) {
    const newValue = e.target.innerHTML.toLowerCase();

    setListedValue((prevList) => {
      if (prevList.includes(newValue)) {
        return prevList.filter((item) => item !== newValue);
      } else {
        return [...prevList, newValue];
      }
    });

    const target = e.target;
    changeColor(target);
  }

  useEffect(() => {
    if (listedValue.length !== 0) {
      dispatch(filterClassNames(listedValue));
      console.log(listedValue);
    } else {
      dispatch(filterReset());
    }
  }, [listedValue, dispatch]);

  function clearList() {
    window.location.reload();
  }

  return (
    <div className="sideBlock">
      <div className="sideItems">
        <h1>Günün Öne Çıkanları</h1>
        <hr />
        <h2>Kategoriler</h2>
        <ul ref={ulRef} className="sideList">
          <li className="sideLi" onClick={writeValue}>
            Laptop
          </li>
          <li className="sideLi" onClick={writeValue}>
            Kulaklık
          </li>
          <li className="sideLi" onClick={writeValue}>
            Telefon
          </li>
          <li className="sideLi" onClick={writeValue}>
            Tablet
          </li>
        </ul>
        <button onClick={clearList}>Temizle</button>
      </div>
    </div>
  );
}

export default CourseSide;
