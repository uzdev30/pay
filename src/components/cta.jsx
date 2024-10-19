import React from "react";
import { styles } from "../util/style";
import Button from "./button";
const CTA = () => {
  return (
    <div
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row
      flex-col rounded-[20px]   bg-dark-gradient box-shadow `}
    >
      <div className={` flex flex-1 flex-col`}>
        <h2 className={` ${styles.heading2}`}>Xizmatlarni sinab ko'rish!</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 `}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          possimus debitis repudiandae ab deleniti.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-10`}>
        <Button />
      </div>
    </div>
  );
};

export default CTA;
