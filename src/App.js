import React, { useRef } from "react";
import { rcp } from "./aggregation/choice";
import "./App.css";
import Computer from "./component/Computer";
import User from "./component/User";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)


export const App = () => { 
  const user = new User();

  const computerRef = useRef(Computer);
  const computer = <Computer ref = {computerRef} />

    const play = (str) => { 
        const userSelect = user.setUserSelect(str);
        const comSelect = computerRef.current.getComSelect();
        user.setUserResult(comSelect);
        computerRef.current.getComResult(userSelect);
   }

  return (
    <div>
      <div className="main">
        <User />
        <Computer />
      </div>
      <div className="main">
        <button onClick={() => play(rcp.scissors)}>가위</button>
        <button onClick={() => play(rcp.rock)}>바위</button>
        <button onClick={() => play(rcp.paper)}>보</button>
      </div>
    </div>
  );
}

