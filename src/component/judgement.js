const judgement = (master, slave) => {
  //승패의 결과 반환하는 조건문 =>
  if (master.name === slave.name) {
    return "tie";
  } else if (master.name === "Rock") {
    return slave.name === "Scissors" ? "win" : "lose";
  } else if (master.name === "Scissors") {
    return slave.name === "Paper" ? "win" : "lose";
  } else if (master.name === "Paper") {
    return slave.name === "Rock" ? "win" : "lose";
  }
};
export default judgement;
