/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。


// * 思路：只要找到比0-3000小的数据，就利用队列把数据去除。




/**
 * @param {number} t
 * @return {number}
 */
var RecentCounter = function() {
  this.stack = []
}
RecentCounter.prototype.ping = function(t) {
  let value = t - 3000
  this.stack.push(t)
  while (this.stack[0] < value) {
    this.stack.shift()
  }
  return this.stack.length
}
