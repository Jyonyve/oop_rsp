/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Box (props) {
  const { title, item, result } = props;

  console.log(result)
  let index;
  let value;
  let itemName;
  let itemImg;

  if(item !== undefined && null){
    index = Object.keys(item)[0];
    value = item[index];
    value = Object.values(value);

    console.log(value)
  }
  
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name"> {itemName} </h2>
      <img className="item-img" src={itemImg} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
