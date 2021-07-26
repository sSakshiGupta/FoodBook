import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="A Table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
