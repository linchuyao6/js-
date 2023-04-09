/**
 * * 题目名称：用两个栈实现队列
 *  题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
 */

// * 思路：初始化两个栈，并定义一个length记录队列长度，当向队列中加入数据时统一加入到stack1，
//* 出栈时第一次先将栈1所有数据挪到栈二，之后出栈都要判断栈二中有没有数据，有数据直接从栈二
//* 中取数据，没有的话再从栈1挪到栈2

var CQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
  this.length = 0;
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value);
  this.length++;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.length === 0) return -1;

  if (this.stack2.length !== 0) {
    this.length--;
    return this.stack2.pop();
  }
  for (let i = 0; i < this.length; i++) {
    this.stack2.push(this.stack1.pop());
  }
  this.length--;
  return this.stack2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// 测试用例
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
var obj = new CQueue();
var param_2 = obj.deleteHead();
obj.appendTail(5);
obj.appendTail(2);
obj.deleteHead();
obj.deleteHead();

console.time("执行用时");
console.log(param_2);
console.timeEnd("执行用时");
