(function(){
  // 'use strict';
  describe('zeroSum3', function(){
    it('should be a function', function(){
      expect(zeroSum3).to.be.function;
    });
    it('should return a boolean', function(){
      expect(zeroSum3([])).to.be.a('boolean');
    });
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

  describe('zeroSum', function(){
    it('should be a function', function(){
      expect(zeroSum).to.be.function;
    });
    it('should return a boolean', function(){
      expect(zeroSum([])).to.be.a('boolean');
    });
    it('should return the correct boolean', function(){
      expect(zeroSum([1,3,2,-3])).to.equal(true);
      expect(zeroSum([5,7,2,9])).to.equal(false);
      expect(zeroSum([1])).to.equal(false);
      expect(zeroSum([])).to.equal(false);
      expect(zeroSum([0,0])).to.equal(true);
      expect(zeroSum([0,1,0,1,0])).to.equal(true);
      expect(zeroSum([1,-1])).to.equal(true);
      expect(zeroSum([6,9,7,5,2,4,6,8,5,5,-7,6,5,-7,-9,-6,-4,7,4,-5,-5,4,2,1])).to.equal(true);
      expect(zeroSum([23,-7,345,123,-5,534,28,-1,90,-4,-6,34,-1,567,-8,21,-2,-3])).to.equal(false);
      expect(zeroSum([0])).to.equal(false);
      expect(zeroSum([0,1,2,3])).to.equal(false);
    });
  });

  describe('wordsWithinWords', function(){
    it('should be a function', function(){
      expect(wordsWithinWords).to.be.function;
    });
    it('should return a string', function(){
      expect(wordsWithinWords(['anything'])).to.be.a('string');
    });
    it('if only one word is passed in it should return that word', function(){
      expect(wordsWithinWords(['anything'])).to.equal('anything');
    });
    it('should return a string that was in the array that was passed in', function(){
      expect(wordsWithinWords(['anything'])).to.equal('anything');
    });
    //edge cases? what happens if its only passed one word?
    it('should return the string that contains the greatest number of other words (from the array)', function(){
      expect(wordsWithinWords(['hello', 'lo', 'he'])).to.equal('hello');
      expect(wordsWithinWords(["gray","grays","ray","rays","strays"])).to.equal('grays');
      expect(wordsWithinWords(["ant","anti","antiparticle","antiparty","apart","art","arty","disparted","impart","imparted","interparticle","interparty","part","parted","particle","party","tip"])).to.equal('antiparty');
      expect(wordsWithinWords(["blue","back","up","and","going","javascript","much","provides","book","series","new","many","complete","background","years","necessary","those","limited","sufficiently","easy","toward","mechanisms","operators","function","types","including","first","sufficiently","easy","books","overview","unicorn","bear","bee","box","cat","gorilla","giant","gear","goal","home","ache","fantastic","exuberant","ice","hollow","happy","healthy","homily","cold","hot","yellow","orange","green","complacent","super","monster","bull","horse","pig","another","one","to","test","you","guys","out","how","like","me","now","son"])).to.equal('background');     
    });
  });
}());


















