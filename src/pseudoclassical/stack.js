const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = -1;
  this.storage = {};
};

// Implement the methods below
Stack.prototype.push = function(value) {
  this.index += 1;
  this.storage[this.index] = value; 
};
Stack.prototype.pop = function() {
  var poped = this.storage[this.index];
  if(this.size() > 0){
    delete this.storage[this.index];
    this.index -= 1;
  }
  return poped;
};
Stack.prototype.size = function() {
  return this.index+1;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
