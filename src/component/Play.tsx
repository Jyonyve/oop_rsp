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
    setDataInMap,} = props;
    

    const playMap : Map<string,{}> = PlayMap.getPlayMap()!;

    const play = (str : rcp) => { //유저가 가위 바위 보 중 하나를 고르고, 이를 메모리에 저장한다. (컴퓨터는 게임 시작할 때 이미 골랐음.)
    console.log(`4: user - click play, setUserSelect`)
        runInAction( () => setUserSelect(str));
    }

    useEffect(() => {
        if(dataInMap == true){ //맵의 둘의 데이터가 다 들어와 있을 경우
            runInAction( () => setUserResult()); //맵에서 컴퓨터의 저장결과를 가져와서 유저와 비교하고, 승부를 리턴한다.
        }
    }, [dataInMap]);

    useEffect(() => {
        if(dataInMap == false){
        setGameCount(gameCount+1);
    console.log(` 0. set gameCount | 10: play - gameCount +1`)
        console.log(`game Count : ${gameCount}`)
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