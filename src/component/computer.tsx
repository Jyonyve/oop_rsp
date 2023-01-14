import React, { useState } from "react";
import { choice } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";

export const computer = (props:any) => {

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState("");
    const [comResult, setComResult] = useState("");

    

    const randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    setComSelect(randomChoice());
    setComResult(judgement(comSelect, ));


    return(
        <Box title={title} item={comSelect} result={comResult} />
    );
}