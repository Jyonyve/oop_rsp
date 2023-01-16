/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Box = (props) => {
  const { title, item, result } = props;

  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name">{item}</h2>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
