import "../css/selectedItem.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  deleteItem,
  calculateTotal,
} from "../control/itemCartSlice";

function SelectedItems({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  function increase() {
    dispatch(increaseCount(id));
    dispatch(calculateTotal());
  }

  function decrease() {
    dispatch(decreaseCount(id));
    dispatch(calculateTotal());
  }

  function deleteAnItem() {
    dispatch(deleteItem({ id, quantity }));
    dispatch(calculateTotal());
  }

  return (
    <>
      <div className="selectedItemMain">
        <div className="selectedItemImg">
          <img src={img} alt="" />
        </div>
        <div className="selectedItemProperties">
          <h2>{title}</h2>
          <h3>{price} TL</h3>
          <div className="setCount">
            <FaChevronLeft onClick={decrease} />
            <h3>{quantity}</h3>
            <FaChevronRight onClick={increase} />
            <button onClick={deleteAnItem}>Sil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedItems;
