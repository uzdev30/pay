import React from "react";
import { styles } from "../util/style";
const ClientCard = ({ logo, title }) => {
  return (
    <div
      className={` flex-1  ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
    >
      {logo}
      <p className={`${styles.paragraph} font-semibold text-gradient`}>
        {" "}
        {title}
      </p>
    </div>
  );
};

export default ClientCard;
