const judgement = (master, slave) => {
  //승패의 결과 반환하는 조건문 =>
  //master와 slave는 [key: [value1, value2]] 모양의 값이다. (예: rock : {name: 'Rock', img: 'img~~'})

  console.log(JSON.stringify(master));
  console.log(JSON.stringify(slave));
  if (Object.keys(master) === Object.keys(slave)) {
    return "tie";
  } else if (Object.keys(master) === "rock") {
    return Object.keys(slave) === "scissors" ? "win" : "lose";
  } else if (Object.keys(master) === "scissors") {
    return Object.keys(slave) === "paper" ? "win" : "lose";
  } else if (Object.keys(master) === "paper") {
    return Object.keys(slave) === "rock" ? "win" : "lose";
  }
};
export default judgement;
