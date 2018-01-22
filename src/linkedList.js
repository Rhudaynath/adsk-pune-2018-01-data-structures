const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.tail === null){
      list.head =  node;
      list.tail =  node;
    }
    else
    {
      list.tail.next = node;
      list.tail = node;
    }  
  };

  list.removeHead = function() {
    var headToRemove = list.head;
    list.head = list.head.next;
    //delete headToRemove;
    return headToRemove.value
  };

  list.contains = function(target) {
    var compare = function(item, itemToCheck){
      if(item.value === itemToCheck)
        return true;
      else if(item.next !== null)
        if(compare(item.next, itemToCheck))
          return true;
      
      return false;
    }

    return compare(this.head, target);
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
