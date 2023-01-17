import { rcp } from "../aggregation/choice";
import React, { useEffect, useRef, useState }  from "react";
import PlayMap from "../store/PlayMap";
import { action, runInAction } from "mobx";
import Box from "../view/Box";

export const Play =(props:any) =>{

    let {title, item, result, setUserSelect, setUserResult, 
    gameCount,
    setGameCount,
    dataInMap,
    } = props;
    
    const play = (str : rcp) => { //유저가 가위 바위 보 중 하나를 고르고, 이를 메모리에 저장한다. (컴퓨터는 게임 시작할 때 이미 골랐음.)
    console.log(`4: user - click play, setUserSelect`)
        runInAction( () => setUserSelect(str));
    }

    useEffect(() => {
        if(dataInMap == true){ //dataInMap의 값이 변하면 동작하는 함수. 맵의 둘의 데이터가 다 들어와 있을 경우,
            runInAction( () => setUserResult()); //맵에서 컴퓨터의 저장결과를 가져와서 유저와 비교하고, 승부를 리턴한다.
        }
    }, [dataInMap]);

    useEffect(() => { //dataInMap의 값이 변하면 동작하는 함수. 맵의 데이터가 싹 비워졌을 때, 게임카운트를 1 올리고 새로운 게임을 시작할 준비를 한다. 
        if(dataInMap == false){  
        setGameCount(gameCount+1);
    console.log(` 0. set gameCount | 10: play - gameCount +1`)
        console.log(`game Count : ${gameCount}`) //렌더링 시간차 때문에 바로 위에서 +1이 되었어도 콘솔에는 아직 더해지기 전의 값이 찍힘. (play를 눌러야 1이 올라감)
        }
    },[dataInMap]) 

    return(
        <div className="main">
             <div>
                <Box title={title} item={item} result={result}/>
            </div>
            <div>
                <button onClick={() => {play(rcp.scissors)}}>가위</button>
                <button onClick={() => {play(rcp.rock)}}>바위</button>
                <button onClick={() => {play(rcp.paper)}}>보</button> 
            </div>
            
        </div>
    );
}