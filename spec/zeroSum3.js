(function(){
  'use strict';
  describe('zeroSum3', function(){
    it('should be a function', function(){
      expect(zeroSum3).to.be.function;
    })
    it('should return the correct boolean', function(){
      expect(zeroSum3([0,0,0])).to.equal(true);
      expect(zeroSum3([1, 3, 2, -3 ])).to.equal(true);
      expect(zeroSum3([0, 2, -2 ])).to.equal(true);
      expect(zeroSum3([5, 7, 2, 9])).to.equal(false);
      expect(zeroSum3([1, 1])).to.equal(false);
      expect(zeroSum3([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1])).to.equal(true);
      expect(zeroSum3([1])).to.equal(false);
      expect(zeroSum3([-2,2])).to.equal(false);
      expect(zeroSum3([])).to.equal(false);
      expect(zeroSum3([1,-1])).to.equal(false);
      expect(zeroSum3([6,9,7,5,2,4,6,8,5,5,6,5,7,4,4,2,1])).to.equal(false);
      expect(zeroSum3([6,9,7,5,2,4,6,8,5,5,6,-2,5,7,4,4,2,1])).to.equal(false);
      expect(zeroSum3([6,9,7,5,1,2,4,6,8,5,5,6,-2,5,7,4,4,2,1])).to.equal(true);
      expect(zeroSum3([23,-7,345,123,-5,534,28,-1,90,-4,-6,34,-1,567,-8,21,-2,-3])).to.equal(false);
      expect(zeroSum3([-1, 2])).to.equal(false);
    });
  });
}());