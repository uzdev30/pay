import React from "react";
import { styles } from "../util/style";
import { discount, robot } from "../assets";
import Button from "./button";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      {/* information */}
      <div className={` flex-1 ${styles.flexStart} md:m-0  my-10 `}>
        <img
          src={robot}
          alt="robot "
          className=" w-[100%] h-[100%] relative  rounded-sm"
        />
      </div>

      <div
        className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 relative`}
      >
        {/* discount information */}
        <div className=" py-[6px] px-4 rounded-[10px] flex flex-row items-center mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} className=" w-[32px] " alt="" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className=" text-white">20%</span> Chegirma{" "}
            <span className=" text-white">1 Oylik</span> Xisob Uchun
          </p>
        </div>
        {/* title */}
        <div className="  w-full">
          <h2 className={` ${styles.heading1}`}>
            Yangi Avlod <br />
            <span className="text-gradient">To'lov Usuli</span>
          </h2>
        </div>
        {/* description */}
        <div className={`${styles.paragraph} mt-5 max-w-[500px]`}>
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aperiam quia, accusamus placeat veniam voluptas iure optio cum
            delectus repellat, fuga nisi officia impedit reiciendis corporis
            itaque illo quaerat adipisci!
          </p>
          {/* getting start */}
          <Button styles={"mt-2"} />
          {/* gradient bg */}
          <div
            className={` absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient`}
          />
          <div
            className={` absolute z-[1] w-[80%] h-[80%]  bottom-40 rounded-full white_gradient`}
          />
          <div
            className={` absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient`}
          />
        </div>
        {/* animation image */}
      </div>
    </section>
  );
};

export default Home;
