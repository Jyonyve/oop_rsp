import { makeObservable, action, computed, observable } from "mobx";
import React, { Component } from "react";
import Choice, { choice, rcp } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";

class User extends Component{

    constructor(props:any){
        super(props);
        makeObservable(this);
    }

    _title : string = 'You';
    
    @observable
    _userSelect : {[key : string] : Choice} = {};

    @observable
    _userResult : string = "";

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

        return this.userSelect;
    }

    @action
    setUserResult = (comSelect : string) => {
        this._userResult = judgement(this.userSelect, comSelect)!;
        return this.userResult;
    }



    render(){
        return(
            <Box title={this.title} item={this.userSelect} result={this.userResult} />
            );
    }

};
export default User;