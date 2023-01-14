import { observable } from "mobx";
import { makeObservable } from "mobx/dist/internal";
import { Component } from "react";
class User extends Component{

    constructor(props : any){
        super(props);
        makeObservable(this);
    }

    title : string = 'Computer';
    
    @observable
    userSelect : string ="";

}
export default User;