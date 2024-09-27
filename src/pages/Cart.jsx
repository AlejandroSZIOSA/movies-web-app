import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { operations_Slice_Actions } from "../utils/redux/store";

export default function CartPage() {
  const totalProducts = useSelector((state) => state.total_products);

  const dispatch = useDispatch();

  function handleOnClickBtn() {
    dispatch(operations_Slice_Actions.CHANGE_QUANTITY_TEST(2));
  }

  return (
    <>
      <div>Cart Page</div>
      <button onClick={handleOnClickBtn}>Change Total Product</button>
    </>
  );
}
