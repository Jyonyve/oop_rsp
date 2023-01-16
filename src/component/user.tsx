import { makeObservable, action, computed, observable } from "mobx";
import React, { Component } from "react";
import Choice, { choice, rcp } from "../aggregation/choice";
import PlayMap from "../store/PlayMap";
import Box from "./Box";
import judgement from "./judgement";
import { Play } from "./Play";

class User extends Component<any, any>{

    constructor(props:any){
        super(props);
        makeObservable(this);
    }

    @observable
    _title : string = 'User';
    
    @observable
    _userSelect : {[key : string] : Choice} = {};

    @observable
    _userResult : string = "";

    playMap = PlayMap.getPlayMap();

    get title() {
        return this._title;
    }

    @computed
    get userSelect(){
        return this._userSelect;
    }

    @computed
    get userResult(){
        return this._userResult;
    }

    @action
    setUserSelect = (str :rcp) => {
        let {rcp_choice, rcp_value} = choice(str)
        
        this._userSelect =  
        { ...this._userSelect,
            [rcp_choice]: rcp_value
        };

        this.playMap!.set('userSelect', this.userSelect);
        return this.playMap!.get('userSelect');
    }

    @action
    setUserResult = () => {
        const comSelect = this.playMap!.get('comSelect')
        this._userResult = judgement(this.userSelect, comSelect)!;
        return this.userResult;
    }

    render(){
        return(
            <><Box title={this.title} item={this.userSelect} result={this.userResult} />
            <Play gameCount = {this.props.gameCount} setGameCount = {this.props.setGameCount}/> 
            </>
            );
    }

};
export default User;