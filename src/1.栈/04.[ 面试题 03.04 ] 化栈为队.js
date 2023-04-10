/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：这道题和前面剑指offer差不多，都是用两个栈实现队列，只是加了判断队列头和队列数组数量的
// * 只需要加个length记录加到两个栈中数据的总数量就行。

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
  this.length = 0
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
  this.length++
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.length === 0) return false
  if (this.stack2.length !== 0) {
    this.length--
    return this.stack2.pop()
  }
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop())
  }
  this.length--
  return this.stack2.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.length === 0) return false
  if (this.stack2.length !== 0) {
    return this.stack2[this.stack2.length - 1]
  } else {
    return this.stack1[0]
  }
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 测试用例
var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.pop()
console.time('执行用时')
console.log(obj.peek())
console.timeEnd('执行用时')
