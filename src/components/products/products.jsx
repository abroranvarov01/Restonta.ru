import React, { useState } from "react";
import style from "./products.module.scss";
import Discount from "../../data/discount";
import New from "../../data/new";
import Trend from "../../data/trend";

export const Products = () => {
  const [activeComponent, setActiveComponent] = useState("discount");

  const components = {
    trend: Trend,
    discount: Discount,
    new: New,
  };

  const ActiveComponent = components[activeComponent];

  return (
    <div className={style.block}>
      <div className="container">
        <ul className={style.list}>
          <li className={style.item}>
            <button
              className={style.btn}
              onClick={() => setActiveComponent("trend")}
              style={{
                backgroundColor: activeComponent === "trend" ? "white" : "",
              }}
            >
              Хиты
            </button>
          </li>
          <li className={style.item}>
            <button
              className={style.btn}
              onClick={() => setActiveComponent("discount")}
              style={{
                backgroundColor: activeComponent === "discount" ? "white" : "",
              }}
            >
              Скидки
            </button>
          </li>
          <li className={style.item}>
            <button
              className={style.btn}
              onClick={() => setActiveComponent("new")}
              style={{
                backgroundColor: activeComponent === "new" ? "white" : "",
              }}
            >
              Новинки
            </button>
          </li>
        </ul>
        <ul className={style.product_list}>
          {ActiveComponent.map((item) => (
            <li className={style.product} key={item.id}>
              <div>
                <img src={item.img} alt="img" />
              </div>
              <h2 className={style.title}>{item.title}</h2>
              <p className={style.text}>{item.text}</p>
              <p className={style.price}>{item.price}₽</p>
              <p className={style.old_price}>{item.oldPrice}₽</p>
              <div className={style.wrap}>
                <button className={style.btn_1}>Купить</button>
                <button className={style.btn_2}>В 1 клик</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
