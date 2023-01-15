import React from "react";
import User from "../component/user";

export enum rcp {
    rock,
    scissors,
    paper,
}

export default interface Choice {
    [key: string]: string;
};


export const choice = (props:rcp) => {

    let rcp_choice : rcp = props;
    let rcp_value : Choice = {};

    switch(rcp_choice){
        case rcp.rock:
            rcp_value['name'] = 'Rock';
            rcp_value['img'] = "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=";
            break;
        case rcp.scissors:
            rcp_value['name'] = 'Scissors';
            rcp_value['img'] = 'https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s';
            break;
        case rcp.paper :
            rcp_value['name'] = 'Paper';
            rcp_value['img'] =  'https://www.collinsdictionary.com/images/full/paper_111691001.jpg';
            break;
        default : 
            throw new Error('가위바위보 값이 없습니다!!');
    }

    return (
        {rcp_choice, rcp_value}
    );
}