import { contactImg } from "../assets";
import { layout, styles } from "../util/style";
import Button from "./button";
const Contract = () => {
  return (
    <section id="product" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Bir necha oson qadamda <br className={`sm:block hidden`} /> kontrakt
          tuzish
        </h1>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          odit maxime modi rem error earum assumenda amet debitis voluptatum
          quae.
        </p>
        <Button styles={` mt-10 `} />
      </div>
      <div className={`${layout.sectonImage}`}>
        <img src={contactImg} alt="img" className={` w-[100%] h-[100%]`} />
      </div>
    </section>
  );
};

export default Contract;
