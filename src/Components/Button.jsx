import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Button = ({content}) => {
  return (
    <button className="btn">
      {content} <FaChevronRight />
    </button>
  );
};

export default Button;
