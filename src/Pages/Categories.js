import React from 'react';
import { useDispatch } from "react-redux";

function Categories() {

  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    dispatch({type:'CHECK_STATUS'})
  }

  return (
    <button onClick={checkStatusHandler} type="button">Check status</button>
  );
}

export default Categories;
