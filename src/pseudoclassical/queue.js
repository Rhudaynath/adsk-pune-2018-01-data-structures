const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.startIndex = 0;
  this.endIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.endIndex] = value;
  this.endIndex++;
};
Queue.prototype.dequeue = function() {
  var removedItem;
  if(this.size() > 0){
    removedItem = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.startIndex += 1; 
  } 
  return removedItem;
};
Queue.prototype.size = function() {
  return this.endIndex - this.startIndex;
};


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
