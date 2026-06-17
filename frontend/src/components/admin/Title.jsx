import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <h1 className="font-bold text-2xl">
      {text1} <span className="  ">{text2}</span>
    </h1>
  );
};

export default Title;
