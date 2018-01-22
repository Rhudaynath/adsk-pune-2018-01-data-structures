const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.startIndex = 0;
  obj.endIndex = 0;
  return obj;
};

queueMethods = {};
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

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
