import React from "react";
import { useState, useEffect } from "react";
import { rcp } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";


export const computer = (props:any) => {

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState("");
    const [comResult, setComResult] = useState("");

    const randomChoice = () => {
        const rcpArr : (string|rcp)[] = Object.values(rcp);
        let randomIndex : number = Math.floor(Math.random() * rcpArr.length);
        return rcp[randomIndex];
    };

    const getComSelect = () => {
        setComSelect(randomChoice());
    }
    const getComResult = (props:any) =>{
        setComResult(judgement(comSelect, props.user.userSelect)!);
    }
    
    return(
        <Box title={title} item={comSelect} result={comResult} />
    );
}