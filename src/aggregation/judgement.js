import { rcp } from "./choice";

const judgement = (player1, player2) => {
  //승패의 결과 반환하는 조건문 =>
  //master와 slave는 [key: [value1, value2]] 모양의 값이다. (예: rock : {name: 'Rock', img: 'img~~'})
 
  let master = Object.keys(player1)[0];
  let slave = Object.keys(player2)[0]; 
  
  console.log(`${master}, ${slave}`)
  //ts의 enum이 js로 넘어오며 타입이 사라져 단순 string으로 처리됨. 콘솔로는 넘어온 값이 number인지 string인지 구별할 수 없어 애를 먹음.
  //=> enum일 경우, 문자열이 상수처리되며 자동으로 숫자가 부여됨(true를 1로 표현하는 것과 비슷)
  //=> 타입 체크의 중요성, typeScript를 써야 하는 이유.
  //아래의 코드에선 가독성을 위해 enum(현재 스트링 숫자로 표현, case 참고) 대신 타입 무시 비교연산자 == 를 쓰는 것으로 해결. 

  if (master === slave) {
    return "tie";
  } 
  
  else {
    switch (master){
      case '0' ://rcp.rock                 // eslint-disable-next-line 
        return (slave == rcp.scissors ? "win" : "lose");
      case '1' ://rcp.scissors             // eslint-disable-next-line 
        return (slave == rcp.paper ? "win" : "lose");
      case '2' ://rcp.paper                // eslint-disable-next-line 
        return (slave == rcp.rock ? "win" : "lose");
      default:
        throw new Error (`Can't judge!`) //case rcp.rock이거나 case 0일 때는 에러를 띄움. '0'으로 받아야만 함.
    }
  }

};
export default judgement;



