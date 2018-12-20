setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });
  
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);

  // result ?
  {
    1
    'TIMEOUT FIRED'
    2
  }

  {
    'TIMEOUT FIRED'
    1
    2
  }
  /** 
   * 令人困惑的是，Node.js文档中称，setImmediate指定的回调函数
   * ，总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。
   * setImmediate和setTimeout被封装在一个setImmediate里面，
   * 它的运行结果总是1--TIMEOUT FIRED--2，
   * 这时函数A一定在timeout前面触发。
   * 至于2排在TIMEOUT FIRED的后面（即函数B在timeout后面触发），
   * 是因为setImmediate总是将事件注册到下一轮Event Loop，
   * 所以函数A和timeout是在同一轮Loop执行，而函数B在下一轮Loop执行。
   * **/



   
  /** 
   * 由此得到了process.nextTick和setImmediate的一个重要区别
   * ：多个process.nextTick语句总是在当前"执行栈"一次执行完，
   * 多个setImmediate可能则需要多次loop才能执行完。事实上，
   * 这正是Node.js 10.0版添加setImmediate方法的原因，
   * 否则像下面这样的递归调用process.nextTick，将会没完没了，
   * 主线程根本不会去读取"事件队列"！
   */

  process.nextTick(function foo() {
    process.nextTick(foo);
  });