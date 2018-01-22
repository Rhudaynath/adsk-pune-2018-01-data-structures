const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let index = -1; 

  // Implement the methods below
  someInstance.push = function(value) {
    index += 1;
    storage[index] = value; 
  };

  someInstance.pop = function() {
    var poped = storage[index];
    if(someInstance.size() > 0){
      delete storage[index];
      index -= 1;
    }
    return poped;
  };

  someInstance.size = function() {
    return index+1;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
