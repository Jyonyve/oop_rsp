/* eslint-disable jsx-a11y/alt-text */
import { toJS } from "mobx";
import React from "react";

function Box (props) {
  const { title, item, result } = props;

  let selection = toJS(item); //mobx 사용으로 클래스형과 함수형이 보내는 데이터 타입이 달라, toJS 통하여 형식 통일
  let key = Object.keys(selection)[0] //앞의 switch문 식별자 enum(가위 바위 보) 추출
  let values = selection[key] //value값 {name: "~~", img: "~~"}만 추출.
  //Object.values(values) = JSON 데이터인 values의 밸류만 모은 배열 반환 -> {"Rock", "http://~~" }
  // !!values = (value !== undefined && null) : !가 하나 붙으면 없으면, !!는 없지 않으면(==있으면)


  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name"> {!!values ? Object.values(values)[0] : ''} </h2>
      <img className="item-img" src={!!values ? Object.values(values)[1]: ''} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
