import React, { useState } from "react";
import Box from "./Box";
import judgement from "./judgement";

export const computer = (props:any) => {

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState("");
    const [comResult, setComResult] = useState("");

    const randomChoice = () => {
        const rcp : string[] = ['rock', 'scissor', 'paper'];
        let randomIndex : number = Math.floor(Math.random() * rcp.length);
        return rcp[randomIndex];
    };

    setComSelect(randomChoice());
    setComResult(judgement(comSelect, props.userSelect)!);


    return(
        <Box title={title} item={comSelect} result={comResult} />
    );
}