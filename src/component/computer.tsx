import Box from "../view/Box";
import judgement from "../aggregation/judgement";
import React, {useEffect, useRef, useState} from "react";
import PlayMap from "../store/PlayMap";
import { choice, rcp } from "../aggregation/choice";


function Computer (props:any){
    const playMap = PlayMap.getPlayMap()!; //store기능을 해줄 Map을 import. 

    const {gameCount, dataInMap} = props;

    const title : string = 'Computer';
    const [comSelect, setComSelect] = useState({});
    const [comResult, setComResult] = useState("");
    
    const comShowValue = useRef({}); 
    //로직 상 컴퓨터의 state가 화면에 표시해야하는 내용보다 빨리 바뀌기 때문에, 바로 이전 승부결과를 담아줄 레퍼런스를 만듦
    //state의 경우 값이 변경되면 렌더링(화면새로고침)이 이루어지기 때문에, 새로고침을 막기 위해 useRef를 사용한 것. => useRef의 값은 변경되어도 렌더링이 새로 되지 않는다.
    //만약 comSelect state를 그대로 view단인 Box에 내려보내면, 컴퓨터가 늘 미리 골라두는 다음 판의 본인 패를 화면에 표시하게 되어버림. (나 다음에 가위 낼거다~ 됨)

    useEffect(()=> {
        comShowValue.current = comSelect;
    }, [comSelect]) //컴퓨터의 state가 바뀔 때, 레퍼런스 내용을 새 state로 덮어씌워라
    

    const randomChoice = () => { //컴퓨터가 랜덤하게 가위 바위 보를 고르는 방법
        const rcpArr : string[] = Object.keys(rcp).filter( value => isNaN(Number(value)));
        /*  바로 위 코드해설
            1. string배열 타입의 변수 rcpArr을 선언한다
            2. Object.keys(rcp) : rcp(Enum)을 배열로 변환하여, 그 배열에서 key를 추출해 새 배열을 만든다 => { rock, 0, scissors, 1, paper, 2}
            3. Enum은 문자열로 만들어도 자동으로 고유번호 상수가 부여되기 때문에 배열이 저렇게 나오게 됨. 
            4. 문자와 숫자가 섞인 배열에 .filter를 사용해 필터링된 새 배열을 반환, rcpArr에 대입할 것
            5. .filter( value => isNaN(Number(value)) : 필터링해서 고를 거야. 내가 가진 어떤 값(value)가, 숫자 형태가 아닌 것만 모아서.
        */
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
        playMap!.set('comSelect', insertCom); //ts의 Map은 put대신 set을 씀
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
            {/* 위의 렌더링 이슈로 인해, 지금 이순간 컴퓨터의 선택값인 comSelect 대신 comSelect의 상태를 캡쳐하기만 하는 comShowValue.current를 view단으로 내려보냄.*/}
        </div>
        </>
    );
};
export default Computer;
