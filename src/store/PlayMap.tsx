export default class PlayMap {

    //User와 Computer는 동등한 레벨의 형제 객체라 서로 state를 사용하여 통신할 수 없다.
    //그래서 둘 각자가 무엇을 냈는지 담을 맵 스토어를 만들어, 싱글톤을 이용해 공유.

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

    static getMapState(){ //맵에 데이터가 2개 이상일 때, true를 반환
        if (this.myInstance && this.myInstance.size > 1){
            return true;
        } 
        return false;
    }
}