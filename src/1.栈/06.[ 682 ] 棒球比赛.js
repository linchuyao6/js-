/**
 * * 题目名称：棒球比赛
 * * 题目地址：https://leetcode-cn.com/problems/baseball-game
 */

// * 思路：这道题也比较简单，只需要根据输入的数据依次进行
// *判断并进行相应的出栈进栈操作就可

const { number } = require('echarts')

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let stack = []
  let sum = 0
  for (let i of operations) {
    if (i === 'C') {
      if (stack.length !== 0) {
        stack.pop()
      }
    } else if (i === 'D') {
      let num = stack[stack.length - 1] * 2
      stack.push(num)
    } else if (i === '+') {
      let num2 = stack[stack.length - 1] + stack[stack.length - 2]
      stack.push(num2)
    } else {
      stack.push(parseInt(i))
    }
  }
  stack.forEach((item) => {
    sum += item
  })
  return sum
}
let result = calPoints(['5', '2', 'C', 'D', '+'])
console.log(result)

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
