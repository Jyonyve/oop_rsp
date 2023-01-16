import { rcp } from "../aggregation/choice";

const judgement = (master, slave) => {
  //승패의 결과 반환하는 조건문 =>
  //master와 slave는 [key: [value1, value2]] 모양의 값이다. (예: rock : {name: 'Rock', img: 'img~~'})

  console.log(Object.keys(master)[0]);
  console.log(Object.keys(slave)[0]);
  // eslint-disable-next-line
  if (Object.keys(master)[0] == Object.keys(slave)[0]) {
    return "tie";
  // eslint-disable-next-line
  } else if (Object.keys(master)[0] == rcp.rock) {
    // eslint-disable-next-line
    return Object.keys(slave)[0] == rcp.scissors ? "win" : "lose";
  // eslint-disable-next-line
  } else if (Object.keys(master)[0] == rcp.scissors) {
    // eslint-disable-next-line
    return Object.keys(slave)[0] == rcp.paper ? "win" : "lose";
  // eslint-disable-next-line
  } else if (Object.keys(master)[0] == rcp.paper) {
    // eslint-disable-next-line
    return Object.keys(slave)[0] == rcp.rock ? "win" : "lose";
  }
};
export default judgement;
