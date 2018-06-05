import PraiseButton from "./src/PraiseButton"
describe("praise button:\n", function(){
    let praise = new PraiseButton();
    let praised = praise.praised;

    it('When praise, should return 1 and the praised should plus 1', function(){
        expect(praise.praise()).toBe(1);
    })
    it('After praise, the praised should plus 1', function(){        
        expect(praise.praised - praised).toBe(1)
    })
})