import React from "react";
import Cards from "../../data/cards";
import style from "./card.module.scss";

export const Card = () => {
  return (
    <div className={style.Card}>
      <div className="container">
        <ul className={style.list}>
          {Cards.map((item) => (
            <li key={item.id} className={style.items}>
              <img src={item.Image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
