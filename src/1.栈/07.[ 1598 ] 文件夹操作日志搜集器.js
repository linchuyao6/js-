/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 */

// * 思路：这道题超级简单，只是在匹配不确定的文件名时
// * 时可能会出现一定问题，这里只要在最后判断文件名就好

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let stack = []
  logs.forEach((item) => {
    if (item === './') {
    } else if (item === '../') {
      stack.pop()
    } else {
      stack.push(item)
    }
  })
  return stack.length
}

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
