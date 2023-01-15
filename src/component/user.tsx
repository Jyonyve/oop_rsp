import autobind from "autobind-decorator";
import { observable } from "mobx";
import { action, makeObservable } from "mobx";
import  React from "react";
import { Component } from "react";
import Choice, { choice } from "../aggregation/choice";
import Box from "./Box";
import judgement from "./judgement";

@autobind
class User extends Component{

    constructor(props : any){
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

    get userSelect(){
        return this._userResult;
    }

    get userResult(){
        return this._userResult;
    }

    @action
    setUserSelect(props :any){
        let {rcp_choice, rcp_value} = choice(props)
        
        this._userSelect =  
        { ...this._userSelect,
            [rcp_choice]: rcp_value};
    }

    @action
    setUserResult(props : any){
        this._userResult = judgement(this.userSelect, props.computer.comSelect)!
    }



    render(){
        return(
            <Box title={this.title} item={this.userSelect} result={this.userResult} />
        );
    }

}
export default User;