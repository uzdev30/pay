export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16  py-6",
  padding: "sm:px-16  px-6 sm:py-12  py-4",
  marginX: "sm:mx-16  mx-6",
  marginY: "xs:my-500px  my-6",
  container: "xl:max-w-[1280px] w-full m-auto  ",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween: "flex justify-between items-center",
  paragraph:
    " font-montserrant font-normal text-lightWhite text-[18px] leading-[30.8px]",
  heading1:
    "font-montserrant font-semibold ss:text-[72px] text-white text-[52px] ss:leading-[100px] leading-[75px]",
  heading2:
    " font-montserrant font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
};

export const layout = {
  section: ` flex flex-col  md:flex-row ${styles.paddingY} `,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}}`,
  sectionInfo: ` flex-1 ${styles.flexStart} flex-col`,
  sectonImage: ` flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 relative `,
  sectonImageReverse: ` flex-1 flex ${styles.flexCenter} md:mr-10 md:mt-0 mt-10 mr-0 relative `,
};
