export default class PraiseButton{
    constructor(){
        this.praised = 0
    }
    praise(){
        return ++this.praised
    }
}