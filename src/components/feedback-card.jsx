import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { feedback } from "../util/constants";
const FeedbackCard = ({ id, content, name, title }) => {
  return (
    <div
      className={` flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]  cursor-pointer feedback-card ${
        id === feedback.length - 1
          ? " md:mr-0 sm:mr-0 mr-0"
          : " md:mr-10 sm:mr-5 mr-0"
      }`}
    >
      <FaQuoteRight className={` w-[42px] h-[27px] object-contain icons`} />
      <p
        className={` font-montserrat font-normal  text-[18px] leading-[32px] text-white my-10`}
      >
        {content}
      </p>
      <div className={` flex flex-row`}>
        <div className=" w-[50px] h-[50px] flex justify-center items-center bg-dark-gradient rounded-full">
          <p className=" text-[22px] font-semibold font-montserrat text-gradient  ">
            {name
              .split(" ")
              .map((i) => i[0])
              .join(".")
              .toUpperCase()}
          </p>
        </div>
        <div className=" flex flex-col ml-4">
          <h4 className=" font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className=" font-normal font-montserrat text-[16px] leading-[24px] text-lightWhite ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
