const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.index = -1;
  return obj;
};

const stackMethods = {};
// Implement the methods below
stackMethods.push = function(value) {
  this.index += 1;
  this.storage[this.index] = value; 
};

stackMethods.pop = function() {
  var poped = this.storage[this.index];
  if(this.size() > 0){
    delete this.storage[this.index];
    this.index -= 1;
  }
  return poped;
};

stackMethods.size = function() {
  return this.index+1;
};


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'stackMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: stackMethods
  });
}
