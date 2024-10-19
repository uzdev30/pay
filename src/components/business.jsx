import React from "react";
import { layout, styles } from "../util/style";
import Button from "./button";
import { features } from "../util/constants";
import { FeaturesCard } from ".";
const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantiring <br className=" sm:block hidden" />
          Pulni hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          quibusdam, at quasi minima accusamus nam officia a delectus dolorum
          repudiandae, inventore tempore sapiente!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectonImage} md:mt-0   mt-6 flex-col`}>
        {features.map((item, idx) => (
          <FeaturesCard key={item.id} {...item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
