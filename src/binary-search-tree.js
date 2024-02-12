const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }
  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null)
      this.head = newNode;
    else {
      let currentNode = this.head;
      while (true) {
        if (data === currentNode.data) {
          break;
        }
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.data === data)
        return true;
      else if (data < tmp.data)
      {
        tmp = tmp.left;
      }
      else
      {
        tmp = tmp.right;
      }
    }
    return false;
  }

  find(data) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.data === data)
        return tmp;
      else if (data < tmp.data)
      {
        tmp = tmp.left;
      }
      else
      {
        tmp = tmp.right;
      }
    }
    return null;
  }

  remove(data) {
    this.head = this.removeNode(this.head, data);    
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }
      const minRightNode = this.findMinNode(node.right);
      node.data = minRightNode;
      node.right = this.removeNode(node.right, minRightNode);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node.data;
    }
    return this.findMinNode(node.left);
  }

  min() {
    let tmp = this.head;
    while (tmp.left)
     tmp = tmp.left;
    return tmp.data;
  }

  max() {
    let tmp = this.head;
    while (tmp.right)
     tmp = tmp.right;
    return tmp.data;
  }
}

module.exports = {
  BinarySearchTree
};