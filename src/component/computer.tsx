import { rcp } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";
import React, {forwardRef, useImperativeHandle, useState} from "react";


const Computer = forwardRef((props:any, ref:any) => {

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState("");
    const [comResult, setComResult] = useState("");

    const randomChoice = () => {
        const rcpArr : (string|rcp)[] = Object.values(rcp);
        let randomIndex : number = Math.floor(Math.random() * rcpArr.length);
        return rcp[randomIndex];
    };

    useImperativeHandle(ref, () => ({
        getComSelect(){
            setComSelect(randomChoice());
            return comSelect;
        },

        getComResult (userSelect :string) {
            setComResult(judgement(comSelect, userSelect)!);
            return comResult;
        }
    }));
    
    return(
        <Box title={title} item={comSelect} result={comResult} />
    );
});
export default Computer;
