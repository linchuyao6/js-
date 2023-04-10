/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */

// * 思路：定义一个栈，将给定字符串按顺序加入到栈顶，如果
// * 栈顶含有所有求元素，对其进行出栈操作

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = []
  for (let i of s) {
    if (stack.length === 0) {
      stack.push(i)
    } else {
      if (stack[stack.length - 1] === i) {
        stack.pop()
      } else {
        stack.push(i)
      }
    }
  }
  return stack.join('')
}

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
