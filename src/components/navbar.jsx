import React, { useState } from "react";
import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { logo } from "../assets";
import { close } from "../assets";
import { menu } from "../assets";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState("home");

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  const activeNav = (id) => setActive(id);

  return (
    <div className={`w-full flex py-6 ${styles.flexBetween}`}>
      {/* logo */}
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className=" w-[130px] h-[55px] cursor-pointer "
        />
      </a>

      {/* navigation link */}

      <ul className=" list-none sm:flex hidden justify-end items-center flex-1 ">
        {navigationLinks.map((item, idx) => (
          <li
            className={` font-montserrat cursor-pointer font-normal text-[16px]  mr-10
             ${idx === navigationLinks.length - 1 ? "mr-0" : " mr-10 "}
            ${active === item.id ? " text-white" : " text-lightWhite"}
              
            
             hover:text-lightWhite transition-all duration-500 `}
            onClick={() => activeNav(item.id)}
            key={item.id}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      {/* navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle === true ? menu : close}
          alt="img"
          className={`w-[30px] h-[30px] object-contain`}
          onClick={handleClick}
        />
        <div
          className={`${
            toggle ? " hidden" : "flex"
          } p-6  absolute  top-20 right-0 left-0 my-2 w-full sidebar bg-black-gradient`}
        >
          <ul className=" list-none flex  flex-col  z-10 justify-center items-center flex-1 ">
            {navigationLinks.map((item, id) => (
              <li
                className={` font-montserrat cursor-pointer font-normal text-[16px]  mr-10
             ${id === navigationLinks.length - 1 ? "mr-0" : " mr-10 "}
            ${active === item.id ? " text-white" : " text-lightWhite"}
              
            
             hover:text-lightWhite transition-all duration-500 `}
                key={item.id}
                onClick={() => activeNav(item.id)}
              >
                {item.title}
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
