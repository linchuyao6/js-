/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

// * 思路：建立两个栈，第一个栈用来进行筛选，第二个栈放置真正要存的数据
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let myStack = [];
  let res = [];
  for (let item of s) {
    if (item === "(") {
      if (myStack.length !== 0) {
        res.push("(");
      }
      myStack.push(item);
    }
    if (item === ")") {
      myStack.pop();
      if (myStack.length != 0) {
        res.push(")");
      }
    }
  }
  return res.join("");
};

// 测试用例
let test = "(()())(())(()(()))";

console.time("执行用时");
console.log(removeOuterParentheses(test));
console.timeEnd("执行用时");
