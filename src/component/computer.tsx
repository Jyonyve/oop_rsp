import Box from "../view/Box";
import judgement from "../aggregation/judgement";
import React, {useEffect, useRef, useState} from "react";
import PlayMap from "../store/PlayMap";
import { choice, rcp } from "../aggregation/choice";


function Computer (props:any){
    const playMap = PlayMap.getPlayMap()!;

    const {gameCount, dataInMap} = props;

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

    useEffect(() => { //한 판이 끝나면(게임 카운트가 변경되면) 컴퓨터가 새로운 가위바위보를 마음에 품고, 그 선택을 맵에 저장한다.
    if(gameCount > 0) {
    console.log(`1: com - random choice`)
        let comRcp = randomChoice();
        let insertCom : {} = {[comRcp.rcp_choice] : comRcp.rcp_value};
    console.log(`2: com -  comSelect to Map`)             
        playMap!.set('comSelect', insertCom);
    console.log(`3: com -  setComSelect`)
        setComSelect(insertCom);
    }
    }, [gameCount] );


    useEffect( () => { //양쪽이 뭘 냈는지 저장하는 맵에 데이터 2개가 다 들어오면, 컴퓨터의 승부를 판단하여 state에 올리고 맵을 비운다.
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
    }, [dataInMap]);


    return(
        <>
        <div>
            <Box title={title} item={comShowValue.current} result={comResult} />
        </div>
        </>
    );
};
export default Computer;
