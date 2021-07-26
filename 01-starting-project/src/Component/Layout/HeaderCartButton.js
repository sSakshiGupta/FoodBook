import React from "react";
import cartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span>
        <cartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
