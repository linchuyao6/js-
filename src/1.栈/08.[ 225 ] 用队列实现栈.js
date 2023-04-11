/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路：这道题主要是模拟出队列比较麻烦
// * 在这里可以在出队列时创造一个队列，将队列最前面的都挨个
// * 放在新队列中，留下最后一个将其跳出去，最后将指针再赋给
// * 新的队列

var MyStack = function() {
  this.stack1 = []
  this.length = 0
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack1.push(x)
  this.length++
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let temStack = []
  for (let i = 0; i < this.length - 1; i++) {
    temStack.push(this.stack1.shift())
  }

  let result = this.stack1.pop()
  this.stack1 = temStack
  this.length--
  return result
}

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let temStack = []
  for (let i = 0; i < this.length - 1; i++) {
    temStack.push(this.stack1.shift())
  }

  let result = this.stack1[0]
  temStack.push(this.stack1.shift())
  this.stack1 = temStack
  return result
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.top()
console.log(param_3)

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
