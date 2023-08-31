import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[104px] h-[104px] rounded-full ${styles.flexCenter} bg-dimYlw`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Buisness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          I do the development, <br className="sm:block hidden" /> You give me
          money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          🤖 Need a coding wizard? Voila! 🎩🦄 I sprinkle tech fairy dust on
          projects. 🌈🔮 Bugs run from me! 🕷️🏃‍♂️ Let's dance a code cha-cha
          together and make apps do the tango! 💃🕺 Don't miss the fun code
          carnival! 🎉🎈🎪
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Buisness;
