import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button
      type="submit"
      className="w-[456px] h-14 bg-black text-white rounded-md leading-[19.36px] font-medium text-base tracking-widest uppercase my-6 "
    >
      {buttonText}
    </button>
  );
};

export default Button;
