import React from "react";
import style from "./header.module.scss";
import Logo from "../../assets/logo.svg";
import Liked from "../../assets/liked.svg";
import { Navbar } from "../../components/navbar/navbar";

export const Header = () => {
  return (
    <div>
      <div className="container">
        <div className={style.header}>
          <div className={style.logo_wrap}>
            <a href="#">
              <img src={Logo} alt="img" />
            </a>
            <p className={style.header_text}>Колбасы и мясные деликатесы</p>
          </div>
          <div className={style.bnts_wrap}>
            <a href="#">
              <img src={Liked} alt="img" />
            </a>
            <div className={style.products}>
              <button className={style.btn}></button>
              <div className={style.btn_text}>
                <p className={style.products_num}>Товаров: 3</p>
                <p className={style.products_price}>6 540 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
