function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  if ( this instanceof LinkedList) {
    this._length = 0;
    this.head = null;
  } else {
    return new LinkedList();
}
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value),
    currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this._length++;
  return node;
};

LinkedList.prototype.print = function() {
currentNode = this.head;
if (!currentNode) {
    return;
} else {
  document.write(currentNode.data, "<br>");
  while (currentNode.next) {
    currentNode = currentNode.next;
    document.write(currentNode.data,"<br>");

  }
}
}

LinkedList.prototype.searchNodeAt = function(position) {
var currentNode = this.head,
  length = this._length,
  count = 1,
  message = {failure: 'Failure: non-existent node in this list.'};

// 1st use-case: an invalid position
if (length === 0 || position < 1 || position > length) {
  throw new Error(message.failure);
}

// 2nd use-case: a valid position
while (count < position) {
  currentNode = currentNode.next;
  count++;
}

return currentNode;
};

LinkedList.prototype.remove = function(position) {
  var currentNode = this.head,
    length = this._length,
    count = 0,
    message = {failure: 'Failure: non-existent node in this list.'},
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null;

  // 1st use-case: an invalid position
  if (position <= 0 || position > length) {
    throw new Error(message.failure);
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  // 3rd use-case: any other node is removed
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
};

var lister = new LinkedList();
lister.add("This is entry 1");
lister.add("linked entry 2");
lister.print();
lister.remove(1);
lister.print();
