const _ = require('underscore');

const Tree = function(value) {
  const newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  const childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var search = function(node, target){
    if(node.value == target)
      return true;
    
    for(var index = 0; index < node.children.length; index++)
    {
      if(search(node.children[index], target))
        return true;
    }

    return false;
  }

  return search(this, target);
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
