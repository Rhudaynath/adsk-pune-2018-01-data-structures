class Queue
{
  constructor()
  {
    this.storage = {};
    this.startIndex = 0;
    this.endIndex = 0;
  }
  
  enqueue(value){
    this.storage[this.endIndex] = value;
    this.endIndex++;
  }

  dequeue(){
    var removedItem;
    if(this.size() > 0){
      removedItem = this.storage[this.startIndex];
      delete this.storage[this.startIndex];
      this.startIndex += 1; 
    } 
    return removedItem;
  }

  size(){
    return this.endIndex - this.startIndex;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
