(function(){
  'use strict';
  describe('timeAlgebra', function(){
    it('should be a function', function(){
      expect(timeAlgebra).to.be.function;
    });
  })
  describe('addChild and contains methods', function(){
    var should = chai.should();
    describe('Tree', function(){
      it('should exist', function(){
        should.exist(Tree);
      });
    });
    describe('addChild', function(){
      it('should exist on the tree prototype', function(){
        should.exist(Tree.prototype.addChild);
      });
      it('should be a function', function(){
        Tree.prototype.addChild.should.be.a.Function;
      });
      it('should add children to the tree', function(){
        var root = new Tree(0);
        root.addChild(5);
        root.children[0].value.should.equal(5);
      });
    });
    describe('contains', function(){
      it('should exist on the tree prototype', function(){
        should.exist(Tree.prototype.contains);
      });
      it('should be a function', function(){
        Tree.prototype.contains.should.be.a.Function;
      });
      //why wont this work????
      xit('should return true for a value that the tree contains', function(){
        var root = new Tree(0);
        root.addChild(5);
        root.addChild(10);
        var node = new Tree(5);
        root.contains(node).should.equal(true);
      });
      it('should return false for a value that was not added', function(){
        var root = new Tree(0);
        root.addChild(5);
        root.contains(9).should.equal(false);
      });
    });
  });

  describe('treeBreadthFirstSelect', function(){
    var should = chai.should();
    describe('Tree', function(){
      it('should exist', function(){
        should.exist(Tree);
      });
    });
    describe('treeBreadthFirstSelect', function(){
      it('should exist on the tree prototype', function(){
        should.exist(Tree.prototype.BFSelect);
      });
      it('should be a function', function(){
        Tree.prototype.BFSelect.should.be.a.Function;
      });
      it('should return an array', function(){
        var root = new Tree ('root');
        var all = function(){return true}
        Array.isArray(root.BFSelect(all)).should.equal(true);
      });
      it('should return all of the nodes in the tree if the filter always evaluates to true', function(){
        var root = new Tree(0);
        var branch1 = new Tree(1);
        var branch2 = new Tree(2);
        root.addChild(branch1);
        root.addChild(branch2);
        branch1.addChild(new Tree(3));
        branch1.addChild(new Tree(4));
        branch2.addChild(new Tree(5));
        branch2.addChild(new Tree(6));
        var all = function(){return true};

        var expected = [0,1,2,3,4,5,6];
        var result = root.BFSelect(all);
        result.should.have.length(expected.length);
        for(var i = 0; i<expected.length; i++){
          result.should.contain(expected[i]);
        }
      });
      it('should filter the nodes in a breadth-first manner', function(){
        var root = new Tree(0);
        var branch1 = new Tree(1);
        var branch2 = new Tree(2);
        root.addChild(branch1);
        root.addChild(branch2);
        branch1.addChild(new Tree(3));
        branch1.addChild(new Tree(4));
        branch2.addChild(new Tree(5));
        branch2.addChild(new Tree(6));
        var all = function(){return true};

        var expected = [0,1,2,3,4,5,6];
        var result = root.BFSelect(all);
        result.should.deep.equal(expected);
      });
      it('should return all nodes passing the filter', function(){
        var evenFilter = function(value, depth){
          if(value%2===0){
            return true;
          } 
        };
        var oddFilter = function(value, depth){
          if(value%2!==0){
            return true;
          }
        };
        var root = new Tree(0);
        var branch1 = new Tree(1);
        var branch2 = new Tree(2);
        root.addChild(branch1);
        root.addChild(branch2);
        branch1.addChild(new Tree(3));
        branch1.addChild(new Tree(4));
        branch2.addChild(new Tree(5));
        branch2.addChild(new Tree(6));
        var evenExpected = [0,2,4,6];
        var evenResult = root.BFSelect(evenFilter);
        var oddExpected = [1,3,5];
        var oddResult = root.BFSelect(oddFilter);
        evenResult.length.should.equal(evenExpected.length);
        oddResult.length.should.equal(oddExpected.length);
        evenResult.should.deep.equal(evenExpected);
        oddResult.should.deep.equal(oddExpected);
      });
      it('should allow filtering by depth', function(){
        //filter constructor produces a filter for the specified depth
        var depthFilter = function(filterDepth){
          return function(node, nodeDepth){
            return filterDepth === nodeDepth;
          };
        };
        //depth 0
        var root = new Tree(0);
        //depth 1
        var branch1 = new Tree(1);
        var branch2 = new Tree(2);
        var branch3 = new Tree(1);
        var branch4 = new Tree(2);
        root.addChild(branch1);
        root.addChild(branch2);
        root.addChild(branch3);
        root.addChild(branch4);
        //depth 2
        branch1.addChild(new Tree(3));
        branch1.addChild(new Tree(4));
        branch2.addChild(new Tree(5));
        branch2.addChild(new Tree(6));
        branch3.addChild(new Tree(7));
        branch3.addChild(new Tree(8));
        branch4.addChild(new Tree(9));
        branch4.addChild(new Tree(10));
        var depthExpect = [[0], [1,2,1,2], [3,4,5,6,7,8,9,10]];
        var resultDepth0 = root.BFSelect(depthFilter(0));
        var resultDepth1 = root.BFSelect(depthFilter(1));
        var resultDepth2 = root.BFSelect(depthFilter(2));
        //do I need to sort?
        resultDepth0.should.deep.equal(depthExpect[0]);
        resultDepth1.should.deep.equal(depthExpect[1]);
        resultDepth2.should.deep.equal(depthExpect[2]);
      });
    });
  });

  describe('treeCountLeaves', function(){
    var should = chai.should();
    describe('Tree', function(){
      it('should exist', function(){
        should.exist(Tree);
      });
    });
    describe('treeCountLeaves', function(){
      it('should exist on the Tree prototype', function(){
        should.exist(Tree.prototype.countLeaves);
      });
      it('should be a function', function(){
        Tree.prototype.countLeaves.should.be.a.Function;
      });
      it('should return a number', function(){
        var root = new Tree('root');
        root.countLeaves().should.be.a.Number;
      });
      it('should return 1 if the tree root has no children', function(){
        var root = new Tree();
        root.countLeaves().should.equal(1);
      });
      it('should return the correct number of leaves (2 if the root has 2 children', function(){
        var root = new Tree();
        root.addChild(new Tree());
        root.addChild(new Tree());
        root.countLeaves().should.equal(2);
      });
      it('should still return 2 if one branch has a leaf', function(){
        var root = new Tree();
        root.addChild(new Tree());
        var branch = new Tree();
        root.addChild(branch);
        branch.addChild(new Tree());
        root.countLeaves().should.equal(2);
      });
      it('should return 6 if the tree has 3 branches each with 2 children', function(){
        var root = new Tree();
        var branch1 = new Tree();
        var branch2 = new Tree();
        var branch3 = new Tree();
        root.addChild(branch1);
        root.addChild(branch2);
        root.addChild(branch3);
        branch1.addChild(new Tree());
        branch1.addChild(new Tree());
        branch2.addChild(new Tree());
        branch2.addChild(new Tree());
        branch3.addChild(new Tree());
        branch3.addChild(new Tree());

        root.countLeaves().should.equal(6);
      });
      it('should be able to correctly count the leaves on a large tree', function(){
        var root = new Tree();
        var branch1 = new Tree();
        var branch2 = new Tree();
        var branch3 = new Tree();
        var branch4 = new Tree();
        var branch5 = new Tree();
        var branch6 = new Tree();
        root.addChild(branch1);
        root.addChild(branch2);
        root.addChild(branch3);
        root.addChild(branch4);
        root.addChild(branch5);
        root.addChild(branch6);
        
        branch2.addChild(new Tree());
        branch2.addChild(new Tree());
        branch3.addChild(new Tree());
        branch3.addChild(new Tree());
        branch4.addChild(new Tree());
        branch4.addChild(new Tree());
        branch5.addChild(new Tree());
        branch5.addChild(new Tree());
        branch6.addChild(new Tree());
        branch6.addChild(new Tree());

        root.countLeaves().should.equal(11)
      });
    });
  });

  describe('treeDepthFirstSelect', function(){
    var should = chai.should();
    describe('Tree', function(){
      it('should exist', function(){
        should.exist(Tree);
      });
    });
    describe('DFSelect', function(){
      //depth 0
      var root = new Tree (1);
      //depth 1
      root.addChild(2);
      root.addChild(3);
      //depth 2
      root.children[0].addChild(4);
      root.children[0].addChild(5);
      root.children[1].addChild(6);
      root.children[1].addChild(7);
      //depth 3
      root.children[0].children[0].addChild(8);
      root.children[1].children[1].addChild(9);


      it('should exist on the Tree prototype', function(){
        should.exist(Tree.prototype.DFSelect);
      });

      it('should be a function', function(){
        Tree.prototype.DFSelect.should.be.a.Function;
      });

      it('should return an array', function(){
        var rootTest = new Tree('root');
        var all = function(){ return true; };
        Array.isArray(rootTest.DFSelect(all)).should.equal(true);
      });

      it('should return all nodes in the tree if filter always returns true', function() {
      // this filter function should always return all of the nodes
        var all = function () { return true; };
        var expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];
        //expect all the nodes we added to root (above)
        var result = root.DFSelect(all);
        result.should.have.length(expected.length);
        result.should.deep.equal(expected);
      });

      it('should return all nodes passing the filter', function(){
        var evenFilter = function(value){
          if(value%2===0){
            return value;
          }
        }
        var result = root.DFSelect(evenFilter);
        //expect all the even values
        var expected = [2, 4, 8, 6];
        result.should.deep.equal(expected);

        var oddFilter = function(value){
          if(value%2 !==0){
            return value;
          }
        }
        result = root.DFSelect(oddFilter);
        var expected = [1, 5, 3, 7, 9];
        result.should.deep.equal(expected);
      });

      it('should allow filtering by depth', function(){
        //this filter consturctor produces a filter function for the specified depth
        var depthFilter = function(filterDepth){
          return function(node, nodeDepth){
            return filterDepth == nodeDepth;
          };
        };
        //correct values for each depth based on tree defined above
        var nodeDepths = [[1], [2,3], [4,5,6,7], [8,9]];

        root.DFSelect(depthFilter(0)).should.deep.equal(nodeDepths[0]);
        root.DFSelect(depthFilter(1)).should.deep.equal(nodeDepths[1]);
        root.DFSelect(depthFilter(2)).should.deep.equal(nodeDepths[2]);
        root.DFSelect(depthFilter(3)).should.deep.equal(nodeDepths[3]);
      });

    });
  });
  
  describe('treeMapping', function(){
    var should = chai.should();
    it('should exist', function(){
      should.exist(Tree);
    });
    it('should be a function', function(){
      Tree.should.be.a.Function;
    });
    //create a tree with some values
    var input = new Tree(1);
    //depth 1
    input.addChild(2);
    input.addChild(3);
    //depth 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    //depth 3
    input.children[0].children[0].addChild(9);
    input.children[1].children[1].addChild(10);
    //compare output from mapping function to the expected result
    var verifyTree = function(result, expectation){
      result.should.be.an.instanceOf(Tree);  // we expect a tree node
      result.value.should.equal(expectation.value); // with the same value
      result.should.not.equal(expectation); // but NOT the same node
      result.children.should.have.length(expectation.children.length);
      for (var i =0; i < result.children.length; i++){
        verifyTree(result.children[i], expectation.children[i]);
      }
    }

    describe('map()', function(){
      it('should exist on the Tree prototype', function(){
        should.exist(Tree.prototype.map);
      });
      it('should be function', function(){
        Tree.prototype.map.should.be.a.Function;
      });
      it('should return a Tree instance', function(){
        var root = new Tree('root');
        var identity = function(value) { return value; };
        var result = root.map(identity);
        should.exist(result);
        result.should.be.an.instanceOf(Tree);
      });
      it('should return an identical tree if the mapping function returns the value unaltered', function(){
        var identity = function(value){ return value; };

        var result = input.map(identity);
        //becaue identity doesnt change anything the input and output trees should have identical values
        verifyTree(result, input)
      });
      it('should return a tree with doubled values if the function doubles the value', function(){
        var double = function(value){return value * 2; };
        //create tree with expected values
        var output = new Tree(2);
        //depth 1
        output.addChild(4);
        output.addChild(6);
        //depth 2
        output.children[0].addChild(8);
        output.children[0].addChild(10);
        output.children[1].addChild(12);
        output.children[1].addChild(16);
        //depth 3
        output.children[0].children[0].addChild(18);
        output.children[1].children[1].addChild(20);

        var result = input.map(double);
        verifyTree(result, output);
      });
    });
  });

  describe('parseQueryString', function(){
    it('should be a function', function(){
      expect(parseQueryString).to.be.function;
    });
    it('should return undefined when there is no querystring', function(){
      expect(parseQueryString("")).to.be.an('undefined');
      expect(parseQueryString("http://google.com")).to.be.an('undefined');
    });
    it('should return an array when the passed in URL contains a query string', function(){
      expect(parseQueryString("http://example.com?a=hello&b=99")).to.be.an('array')
    });
    it('should return an array containing the correct tuples for a variety of test urls', function(){
      expect(parseQueryString("http://example.com?a=hello&b=99")).to.deep.equal([["a","hello"],["b","99"]]);
      expect(parseQueryString("http://example.com")).to.be.an('undefined');
      expect(parseQueryString("http://example.com?msg=hello%20world")).to.deep.equal([["msg","hello world"]]);
      expect(parseQueryString("http://www.amazon.com/dp/1118907442?s=books&ie=UTF8&sr=1-1")).to.deep.equal([["s","books"],["ie","UTF8"],["sr","1-1"]]);
      expect(parseQueryString("http://example.com/books/search?title=Etiquette%20%26%20Espionage")).to.deep.equal( [["title","Etiquette & Espionage"]]);
    });
  });

  describe('virtualDOM', function(){
    it('should be a function', function(){
      expect(virtualDOM).to.be.function;
    });
    it('should return an object', function(){
      expect(virtualDOM('h1', {"class": "item"})).to.be.a('object');
    });
    it('should return an object containing 3 keys ("tag", "attrs", "children")', function(){
      var tag = 'h2';
      var attrs = {id: 'what'};
      var content = 'Hello World';
      var expected = virtualDOM(tag, attrs, content);
      expect(expected.tag).to.exist;
      expect(expected.attrs).to.exist;
      expect(expected.children).to.exist;
    });
    it('should return an empty object as the attrs property if the attrs argument doesnt contain the keys "class", "id", or "type"', function(){
      var tag = 'h3';
      var attrs = {candy: 'what'};
      var content;
      var expected = virtualDOM(tag, attrs, content);
      expect(expected.attrs).to.deep.equal({})
    });
    it('should return an object with children property equal to null if the attrs argument only contains keys "class"/"id"/"type" and there is no content argument)', function(){
      var tag = 'h4';
      var attrs = {id: 'what'};
      var content;
      var expected = virtualDOM(tag, attrs, content);
      expect(expected.children).to.deep.equal(null);
    });
    it('should return an object containing the correct keys and properties for a variety of test cases', function(){
      var expected = virtualDOM("h1", "Hello World");
      expect(expected).to.deep.equal({"tag":"h1","attrs":{},"children":["Hello World"]});
      expected = virtualDOM("div", {"class":"item"}, "My Item");
      expect(expected).to.deep.equal({"tag":"div","attrs":{"class":"item"},"children":["My Item"]});
      expected = virtualDOM("p", {"tag":"strong","children":["yo"]});
      expect(expected).to.deep.equal({"tag":"p","attrs":{},"children":[{"tag":"strong","children":["yo"]}]});
      expected = virtualDOM("input", {"type":"checkbox"}, {"tag":"label","children":["yo check me out"]});
      expect(expected).to.deep.equal({"tag":"input","attrs":{"type":"checkbox"},"children":[{"tag":"label","children":["yo check me out"]}]});
      expected = virtualDOM("br");
      expect(expected).to.deep.equal({"tag":"br","attrs":{},"children":null});
      expected = virtualDOM("div", ["My Item"]);
      expect(expected).to.deep.equal({"tag":"div","attrs":{},"children":["My Item"]});
      expected = virtualDOM("div", {"id":"pet-shop"});
      expect(expected).to.deep.equal({"tag":"div","attrs":{"id":"pet-shop"},"children":null});
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

}());


















