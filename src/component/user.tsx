import { makeObservable, action, computed, observable, runInAction } from "mobx";
import React, { Component } from "react";
import Choice, { choice, rcp } from "../aggregation/choice";
import PlayMap from "../store/PlayMap";
import Box from "../view/Box";
import judgement from "./judgement";
import { Play } from "./Play";

class User extends Component<any>{

    constructor(props:any){
        super(props);
        makeObservable(this ,{
            _userSelect: observable,
            _userResult: observable,
            userSelect: computed,
            userResult :computed,
            setUserSelect : action.bound,
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

    setUserSelect (str :rcp) {
        let {rcp_choice, rcp_value} = choice(str)
        
        this._userSelect =  
        { 
            [rcp_choice]: rcp_value
        };
    console.log(`5: user - userSelect to Map`)
        this.playMap!.set('userSelect', this.userSelect);
    console.log(`6: Data - DataInMap to true(ready to get result)`)
        this.props.setDataInMap(true);
    }

    setUserResult() {
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