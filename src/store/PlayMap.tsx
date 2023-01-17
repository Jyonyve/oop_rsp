export default class PlayMap {

    static myInstance :  Map<string,{}>|null = null;
    isDataIn : boolean = false;

    private constructor(){
        PlayMap.myInstance = new Map();
    }
    
    static getPlayMap(){
        if(PlayMap.myInstance === null){
            PlayMap.myInstance = new Map();
        }
        return this.myInstance;
    }

    static getMapState(){
        if (this.myInstance && this.myInstance.size > 1){
            return true;
        } 
        return false;
    }
}