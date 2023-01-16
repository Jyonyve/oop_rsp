import { rcp } from "../aggregation/choice";
import User from "./User";
import React, { useEffect, useRef, useState }  from "react";
import PlayMap from "../store/PlayMap";
import  Computer, { GetComResult } from "./computer";

export const Play =(props:any) =>{

    const user : User = new User(props);
    const playMap : Map<string,{}> = PlayMap.getPlayMap()!;
    let {gameCount, setGameCount} = props;
    
    const play = (str : rcp) => { //유저가 가위 바위 보 중 하나를 고르고, 이를 메모리에 저장한다. (컴퓨터는 게임 시작할 때 이미 골랐음.)
        let userData = user.setUserSelect(str);
        console.log(`setUserSelect ${JSON.stringify(userData)}`);
        setGameCount(gameCount +1 );
        console.log(`setGameCount : ${gameCount}`);
    }

    const getResult = (props:any) => {
        user.setUserResult(); //맵에서 컴퓨터의 저장결과를 가져와서 유저와 비교하고, 승부를 리턴한다.
        playMap.get('comResult'); //맵에서 유저와 컴퓨터의 저장결과를 둘다 가져와 비교하고, 승부를 리턴한다.
        playMap.clear;
    }

    useEffect(()=>{ 
        console.log(`useEffect : ${gameCount}`);
        if( gameCount !== 0){
           getResult(props); 
        }
    },[gameCount]);


    return(
        <div className="main">
            <div>
            <>
                <br/>
                <button onClick={() => {play(rcp.scissors)}}>가위</button>
                <button onClick={() => {play(rcp.rock)}}>바위</button>
                <button onClick={() => {play(rcp.paper)}}>보</button></>  
                :
                <br/>
            </div>
        </div>
    );
}