### 关于react的文档学习以及记录

#### React16.8之后的新特性
- react hooks
- PureComponent引入
- // 组件插槽, 类似reactDOM的render方法, 把Comp挂在到element上
React.createPortal(Comp, Element)
- 懒加载、动态加载



#### React Fiber架构


#### React Diff算法以及复杂度



#### React的setState是同步的还是异步的呢？
- 正常情况是异步执行
- 在setTimeout, Promise等异步方法中或原生事件中是同步
- 因为React的setState有isBatchingUpdate，react原生事件的时候，isBatchingUpdate = true，将setState加入setState等待队列中，所以批量更新，
setTimeout等是原生方法，react获取不到上下文，导致isBatchingUpdate = false，同步执行。