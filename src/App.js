import React , { useState} from "react";
import "./App.css";
import User from "./component/User";
import Computer from "./component/Computer";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)


export const App = () => {
  
  //모든 컴포넌트가 공유할 정보로, 게임이 몇 판 일어났는지(play를 몇 번 눌렀는지)와
  //참가자 두 명 다 결과를 제출했는지(가위 바위 보를 냈는지)를 알려주는 state를 props에 담아 보냄.
  //App과 index는 되도록 깨끗하게 유지하자!! => R&R (Role & Responsibility, 역할과 책임)에 따라, App은 main인데 얘가 뭔 일을 하면 안되겠죠?
  
  const [gameCount, setGameCount] = useState(0); 
  const [dataInMap, setDataInMap] = useState(false);

  return (
    <div>
      <div className="main">
        <User gameCount = {gameCount}
        setGameCount = {setGameCount}
        dataInMap = {dataInMap}
        setDataInMap = {setDataInMap}
        />
        <Computer gameCount = {gameCount}
        setGameCount = {setGameCount}
        dataInMap = {dataInMap}
        setDataInMap = {setDataInMap}
        />
      </div>
    </div>
  );
}

