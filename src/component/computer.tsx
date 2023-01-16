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
        let comRcp = choice(randomIndex);
        return  comRcp;
    };

    useEffect(() => { //한 판이 끝나면 컴퓨터가 새로운 가위바위보를 마음에 품고, 새로운 컴퓨터의 선택을 저장한다.
        let comRcp = randomChoice();
        let insertCom : {} = {};
        insertCom = {
            ...insertCom,
            [comRcp.rcp_choice] : comRcp.rcp_value
        }
        setComSelect(insertCom),
        playMap!.set('comSelect', insertCom);
        console.log(`getComputerSelected ${JSON.stringify(playMap.get('comSelect'))}`);
    }, [comResult] );

    const getCR = (props: any) => {
        setComResult(props);
        return comResult;
    };

    return(
        <>
        <div>
            <GetComResult setComResult = {getCR} title={title}  />
        </div>
        </>
    );
};
export default Computer;


export const GetComResult = (props:any) => {
    const playMap = PlayMap.getPlayMap()!;
    const userSelect = playMap!.get('userSelect');
    const comSelect = playMap!.get('comSelect');

    let {title, setComResult} = props;
    let comResult : string = ''

    if(userSelect && comSelect){
        const CResult : string = judgement(comSelect, userSelect)!;
        comResult = setComResult(CResult);
        playMap.set('comResult', comResult);
    }

    return (
        <Box title={title} item={comSelect} result={comResult} />
    );
}