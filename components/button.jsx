import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-lg bg-[#DFBA47] shadow-md hover:shadow-lg active:bg-[#C8A741] px-5 py-4 text-white">
      {props.text}
    </button>
  );
};

export default Button;
