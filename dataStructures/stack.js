/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
      this._key = 0;
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
      this._storage[this._key] = value
      this._key++
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      this._key--
      const lastItem = this._storage[this._key]
      delete this._storage[this._key]
      return lastItem
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
      return this._storage[this._key - 1]
    }
  }
  
  const myStack = new Stack();
  //console.log(myStack)
  
  //TODO: input validation, check if empty stack