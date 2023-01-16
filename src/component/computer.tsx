import Box from "./Box";
import judgement from "./judgement";
import React, {useEffect, useState} from "react";
import PlayMap from "../store//PlayMap";
import { choice, rcp } from "../aggregation/choice";


function Computer (props:any){
    const playMap = PlayMap.getPlayMap()!;

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState({});
    const [comResult, setComResult] = useState("");
    

    const randomChoice = () => { //컴퓨터가 랜덤하게 가위 바위 보를 고른다.
        const rcpArr : string[] = Object.keys(rcp).filter( value => isNaN(Number(value)));
        let randomIndex : number = Math.floor(Math.random() * rcpArr.length);
        const comRcp = choice(randomIndex);
        return  comRcp;
    };

    useEffect(() => { //처음 컴퓨터가 마운팅 될 때 마음에 결과값 하나를 품는다.
        setComSelect(randomChoice()),
        playMap!.set('comSelect', comSelect);
    }, []);

    useEffect(() => { //한 판이 끝나면 컴퓨터가 새로운 가위바위보를 마음에 품고, 새로운 컴퓨터의 선택을 저장한다.
        setComSelect(randomChoice()),
        playMap!.set('comSelect', comSelect);
    }, [comResult] );

    return(
        <>
        <div>
            <GetComResult comResult = {comResult} setComResult = {setComResult}/>
            <Box title={title} item={comSelect} result={comResult} />
        </div>
        </>
    );
};
export default Computer;


export const GetComResult = (props:any) => {
    const playMap = PlayMap.getPlayMap()!;
    const userSelect = playMap!.get('userSelect');
    const comSelect = playMap!.get('comSelect');

    if(userSelect && comSelect){
        props.setComResult(judgement(comSelect, userSelect)!);
    }

    return props.comResult;
}