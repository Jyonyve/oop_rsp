import React from "react";

const Box = (props) => {
  let boxResult;
  const { title, item, result } = props;
  if (title === "Computer" && result !== "tie" && result !== "") {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    boxResult = result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    boxResult = result;
  }
  if (title === "Computer") {
    console.log("computer", boxResult);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name">{item && item.name}</h2>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
