import { makeObservable, action, computed, observable, runInAction } from "mobx";
import React, { Component } from "react";
import Choice, { choice, rcp } from "../aggregation/choice";
import PlayMap from "../store/PlayMap";
import Box from "./Box";
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
            setUserSelect : action,
            setUserResult :action
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
        
        runInAction( () => this._userSelect =  
        { ...this._userSelect,
            [rcp_choice]: rcp_value
        });

        this.playMap!.set('userSelect', this.userSelect);
        console.log(`getUserSelected ${JSON.stringify(this.playMap!.get('userSelect'))}`)
        return this.playMap!.get('userSelect');
    }

    setUserResult() {
        const comSelect = this.playMap!.get('comSelect');
        const userSelect = this.playMap!.get('userSelect');
        const judge : string = judgement(userSelect, comSelect)!;
        console.log(`user result : ${judge}`);
        runInAction ( () => this._userResult = judge);
        return this.userResult;
    }

    render(){
        return(
            <>
            <Box title={this.title} item={this.userSelect} result={this.userResult} />
            <Play gameCount = {this.props.gameCount} setGameCount = {this.props.setGameCount} /> 
            </>
        );
    }

};
export default User;