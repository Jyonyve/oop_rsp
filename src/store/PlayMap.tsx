export default class PlayMap {
    static myInstance : PlayMap;
    data : Map<string,string>;

    private constructor(){
        this.data = new Map();
    }
    
    static getInstance(){
        if(PlayMap.myInstance === null){
            this.myInstance = new PlayMap();
        }
        return this.myInstance;
    }

    getData(){
        return this.data;
    }

}