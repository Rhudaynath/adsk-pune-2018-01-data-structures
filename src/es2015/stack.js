class Stack{
  constructor(){
    this.storage = {};
    this.index = -1;
  };

  push(value) {
  this.index += 1;
  this.storage[this.index] = value; 
  }

  pop(){
    var poped = this.storage[this.index];
    if(this.size() > 0){
      delete this.storage[this.index];
      this.index -= 1;
    }
    return poped;
  }
  
  size(){
  return this.index+1;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
