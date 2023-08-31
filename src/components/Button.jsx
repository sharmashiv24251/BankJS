import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient cursor-pointer rounded-[10px] outline-none ${styles}`}
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/shivansh-sharma-582118236/",
        "_blank"
      )
    }
  >
    Get Started
  </button>
);

export default Button;
