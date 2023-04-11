/**
 * * 题目名称：用栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks
 */

// * 思路：前面都实现过了，并不难

var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
  this.length = 0
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
  this.length++
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack2.length !== 0) {
    this.length--
    return this.stack2.pop()
  }
  let stack1Len = this.stack1.length
  for (let i = 0; i < stack1Len; i++) {
    this.stack2.push(this.stack1.pop())
  }
  this.length--
  return this.stack2.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stack2.length !== 0) {
    return this.stack2[this.stack2.length - 1]
  }
  let stack1Len = this.stack1.length
  for (let i = 0; i < stack1Len; i++) {
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2[this.stack2.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.length === 0
}

var obj = new MyQueue()
obj.push(1)
obj.push(2)

var param_3 = obj.peek()
var param_2 = obj.pop()
var param_4 = obj.empty()
console.log(param_2)
console.log(param_3)
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
