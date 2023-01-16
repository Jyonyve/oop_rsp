/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Box = (props) => {
  const { title, item, result } = props;

  let index;
  let value;
  let itemName;
  let itemImg;

  if(!!item){
    index = Object.keys(item)[0];
    value = item[index];
    console.log(value);
    itemName = value.name;
    itemImg = value.img;
    console.log(`${itemName} + ${itemImg}`)
  }

  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name"> {!!item ? itemName : ''} </h2>
      <img className="item-img" src={!!item ? itemImg : ''} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
