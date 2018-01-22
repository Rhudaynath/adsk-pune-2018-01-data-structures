const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {
  };

  var startIndex=0;
  var endIndex=0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endIndex] = value;
    endIndex++;
  };

  someInstance.dequeue = function() {
    var removedItem;
    if(someInstance.size() > 0){
      removedItem = storage[startIndex];
      delete storage[startIndex];
      startIndex += 1; 
    }
    return removedItem;
  };

  someInstance.size = function() {
    return endIndex - startIndex;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
