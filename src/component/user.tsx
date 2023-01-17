import { makeObservable, action, computed, observable, runInAction } from "mobx";
import React, { Component } from "react";
import Choice, { choice, rcp } from "../aggregation/choice";
import PlayMap from "../store/PlayMap";
import judgement from "../aggregation/judgement";
import { Play } from "./Play";

class User extends Component<any>{

    constructor(props:any){
        super(props);
        makeObservable(this ,{ //변수 위에 데코레이터를 써도 되지만, 이번엔 생성자에서 변수들에게 속성을 줘봄(mobx 문법)
            _userSelect: observable, //observable: 이 데이터가 변하는 것을 관찰하겠다 -> state화
            _userResult: observable,
            userSelect: computed,
            userResult :computed,
            setUserSelect : action.bound, //observable의 스테이트가 변하는 동작을 하는 함수에 붙임.
            setUserResult :action.bound
        });
    }

    _title : string = 'User';
    
    _userSelect : {[key : string] : Choice} = {};

    _userResult : string = "";

    playMap = PlayMap.getPlayMap();

    get title() {
        return this._title;
    }

    get userSelect(){
        return this._userSelect;
    }

    get userResult(){
        return this._userResult;
    }

    setUserSelect (str :rcp) { //유저가 고른 가위바위보 값과 정보(이미지)등을 select에 담고, map에도 저장.
        let {rcp_choice, rcp_value} = choice(str)
        this._userSelect =  
        { 
            [rcp_choice]: rcp_value
        };

    console.log(`5: user - userSelect to Map`)
        this.playMap!.set('userSelect', this.userSelect);
    console.log(`6: Data - DataInMap to true(ready to get result)`)
        this.props.setDataInMap(true); //컴퓨터가 항상 미리 본인 값을 골라두므로, 유저가 값을 고르면 맵에 두 데이터가 다 들어온다. dataInMap을 true로 변경
    }

    setUserResult() { //맵에 컴퓨터와 유저 둘의 데이터가 다 들어와 있을 때, 유저의 승부를 userResult에 담는다.
        console.log(`7: Data - setUserResult`);
        if (this.props.dataInMap == true ) {
            const userSelect = this.userSelect;
            const comSelect = this.playMap!.get('comSelect');

            console.log(`DataInMap == true, this judgement is for user`);
            const judge : string = judgement(userSelect, comSelect)!;
            this._userResult = judge;
            console.log(`user result = ${this._userResult}`);
        };
    };

    render(){
        return(
            <>
            <Play 
            {...this.props}
            title={this._title}
            item={this.userSelect}
            result={this._userResult}
            setUserSelect = {this.setUserSelect.bind(this)}
            setUserResult = {this.setUserResult.bind(this)}
            /> 
            </>
        );
    }

};
export default User;