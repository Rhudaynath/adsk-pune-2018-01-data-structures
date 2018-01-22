const _ = require('underscore');

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = {};
  object.storage = {};
  object.startIndex = 0;
  object.endIndex = 0;
  object.enqueue = queueMethods.enqueue;
  object.dequeue = queueMethods.dequeue;
  object.size = queueMethods.size;
  return object;
};

const queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.endIndex] = value;
  this.endIndex++;
};
queueMethods.dequeue = function() {
  var removedItem;
  if(this.size() > 0){
    removedItem = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.startIndex += 1; 
  } 
  return removedItem;
};
queueMethods.size = function() {
  return this.endIndex - this.startIndex;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
