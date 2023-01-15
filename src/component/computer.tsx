import { rcp } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import PlayMap from "../store/playMap";


const Computer = (props:any) => {

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState("");
    const [comResult, setComResult] = useState("");

    const randomChoice = () => {
        const rcpArr : (string|rcp)[] = Object.values(rcp);
        let randomIndex : number = Math.floor(Math.random() * rcpArr.length);
        return rcp[randomIndex];
    };

    useEffect(() => {
        setComSelect(randomChoice());
        const playMap = PlayMap.getInstance();
        playMap.data.set('comSelect', comSelect);
    })
        
    }
    function getComResult (userSelect :string) {
        setComResult(judgement(comSelect, userSelect)!);
        return comResult;
    }
    
    return(
        <Box title={title} item={comSelect} result={comResult} />
    );
};
export default Computer;
