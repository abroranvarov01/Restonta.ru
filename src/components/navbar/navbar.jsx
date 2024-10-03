import React from "react";
import style from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className="container">
        <div className={style.block}>
          <ul className={style.list}>
            <li className={style.item}>
              <p className={style.item_text}>О ресноте</p>
            </li>
            <li className={style.item}>
              <p className={style.item_text}>Каталог</p>
            </li>
            <li className={style.item}>
              <p className={style.item_text}>Наши магазины</p>
            </li>
            <li className={style.item}>
              <p className={style.item_text}>Контакты</p>
            </li>
          </ul>
          <form className={style.form}>
            <input
              placeholder="Поиск по сайту"
              className={style.input}
              type="text"
            />
            <button className={style.btn}></button>
          </form>
        </div>
      </div>
    </div>
  );
};
