export default class PlayMap {
    static myInstance :  Map<string,{}>|null = null;

    private constructor(){
        PlayMap.myInstance = new Map();
    }
    
    static getPlayMap(){
        if(PlayMap.myInstance === null){
            PlayMap.myInstance = new Map();
        }
        return this.myInstance;
    }


}