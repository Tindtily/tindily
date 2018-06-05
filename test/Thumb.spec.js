import Thumb from "./src/Thumb"
describe("Thumb button:\n", function(){
    let thumb = new Thumb();
    let thumPraised = thumb.praised;

    it('When praise, should return 1 and the praised should plus 1', function(){
        expect(thumb.praise()).toBe(1);
    })
    it('After praise, the praised should plus 1', function(){        
        expect(thumb.praised - thumPraised).toBe(1)
    })
})