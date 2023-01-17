import Box from "../view/Box";
import judgement from "./judgement";
import React, {useEffect, useRef, useState} from "react";
import PlayMap from "../store/PlayMap";
import { choice, rcp } from "../aggregation/choice";
import { toJS } from "mobx";


function Computer (props:any){
    const playMap = PlayMap.getPlayMap()!;

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState({});
    const [comResult, setComResult] = useState("");
    const comShowValue = useRef({});

    useEffect(()=> {
        comShowValue.current = comSelect;
    }, [comSelect])
    

    const randomChoice = () => { //컴퓨터가 랜덤하게 가위 바위 보를 고르는 방법
        const rcpArr : string[] = Object.keys(rcp).filter( value => isNaN(Number(value)));
        let randomIndex : number = Math.floor(Math.random() * rcpArr.length);
        let comRcp = choice(randomIndex);
        return  comRcp;
    };

    useEffect(() => { //한 판이 끝나면 컴퓨터가 새로운 가위바위보를 마음에 품고, 그 선택을 맵에 저장한다.
    if(props.gameCount > 0) {
    console.log(`1: com - random choice`)
        let comRcp = randomChoice();
        let insertCom : {} = {};
        insertCom = {[comRcp.rcp_choice] : comRcp.rcp_value};
    console.log(`2: com -  comSelect to Map`)             
        playMap!.set('comSelect', insertCom);
    console.log(`3: com -  setComSelect`)
        setComSelect(insertCom);
    }
    }, [props.gameCount] );


    return(
        <>
        <div>
            <GetComResult {...props} comShowValue = {comShowValue.current} setComResult = {setComResult} comResult={comResult} title={title}  />
        </div>
        </>
    );
};
export default Computer;


export const GetComResult = (props:any) => {
    const playMap = PlayMap.getPlayMap()!;

    const {title, comShowValue, comResult, setComResult, dataInMap} = props;

    useEffect( () => {
        if(dataInMap == true){
            console.log(`DataInMap == true, this judgement is for computer`)
            const CResult : string = judgement(playMap.get('comSelect'), playMap.get('userSelect'))!;
            console.log(`computer result : ${CResult}`);
    console.log(`8: com - setComResult`)
            setComResult(CResult);
            playMap.clear;
    console.log(`9: Data - set DataInMap to false`)
            props.setDataInMap(false);
        }    
    }, [dataInMap])
    

    return (
        <Box
            title={title} 
            item={comShowValue} 
            result={comResult} 
        />
    );
}