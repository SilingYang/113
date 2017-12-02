const main = require('../main/main');

describe('taxi fee', function () {
    it('when distance <= 2 km',function(){
       expect(main(1,0)).toEqual(6);
    });
    it('when distance>8',function(){
        expect(main(9,4)).toEqual(13);
    });
    it('when 2<distance<=8',function(){
        expect(main(6,4)).toEqual(10);
    })
});
