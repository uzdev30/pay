import React from "react";
import { layout, styles } from "../util/style";
import { billing, apple, google } from "../assets";
const Billing = () => {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectonImageReverse}`}>
        <img
          src={billing}
          alt="bill"
          className=" w-[100%] h-[100%] relative z-[5]"
        />
        <div
          className={` absolute z-[3] -left-1/2  w-[50%] h-[55%] rounded-full top-0 white_gradient`}
        />
        <div
          className={` absolute z-[1] -left-1/2  w-[50%] h-[50%]  bottom-0 rounded-full pink_gradient`}
        />
        <div
          className={` absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient`}
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Hisob-kitob va fakkturial <br className={`sm:block hidden`} />
          osongina boshqaring
        </h2>
        <p className={` ${styles.paragraph} max-w-[550px] mt-5`}>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          similique earum harum vero quibusdam eligendi quia rem pariatur? Nisi,
          corrupti Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem.
        </p>
        <div className={` flex flex-row flex-wrap sm:mt-10 mt-6 `}>
          <img
            src={google}
            alt="this is not found "
            className={` w-[129px] h-[42px] mr-5 cursor-pointer object-contain`}
          />
          <img
            src={apple}
            alt="this is not found "
            className={` w-[129px] h-[42px] mr-5 cursor-pointer object-contain`}
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
