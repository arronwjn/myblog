# 前端知识总结

### 什么是异步？什么是同步？

什么是同步解释:

同步就是执行一个任务，后一个任务等待前一个任务结束然后再执行，程序的执行循序与排列循序是一致的同步的．

什么是异步：

每个任务都有一个或多个回调函数，前一个任务结束后不是执行后一个，而是执行回调函数，后一个任务也不是等待

前一个任务结束就执行，程序的执行循序与任务的排列循序是不一致的


先来看个小例子

```
let a=new Promise(
  function(resolve,reject){
    console.log(1)
    setTimeout(()=>console.log(2),0)
    console.log(3)
    console.log(4)
    resolve(true)
  }
)
a.then(v=>{
  console.log(8)
  })

let b=new Promise(
  function(){
    console.log(5)
    setTimeout(()=>
    console.log(6),0)
  }
  )
  console.log(7)
```

答案是：1 3 4 5 7 8 2 6

记住一个大神传给我的口诀，就可以打遍天下无敌手啦啦啦

> 同步优先，异步靠边，回调吊车尾


### 什么是回调

回调是异步编程最基本的方法,对node.js来说需按顺序执行异步逻辑的时候，一般采用后续传递的方式，也就是将后续逻辑封装在

回调函数中作为起始函数的参数，逐层去嵌套，通过这种方式让程序按照我们期望的那种方式走完整个流程．


### undefined和null的区别？

- 首先undefined和null属于不同的数据类型

null表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

```
Object.getPrototypeOf(Object.prototype)
// null
```

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

```
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

### 数据类型的起源

有一个大神，想要创造一个世界，他把这个世界的起点叫做null，然后大神觉得需要创造很多很多东西，但是不知道

要怎么创造，创造什么样地，所以全都叫做undefined,大神思考了几十亿年后，他终于知道自己要创造什么了，大神

是一个哲学大师，他认为世界需要两面，也就是一生二，所以有了阴阳，大神给它取名boolean，阴为false阳为true

有了这三个数据类型之后，这个宇宙还是没有任何东西，大神继续思考了数千亿光年，他觉得需要很多很多的010101就能

构成这个奇妙的世界，所以Number诞生了，大神通过定义好的Number数据类型造了非常多的星球，他每天都在数星星，数了

几万亿光年，后来有一天，大神觉的这样做好无聊，就想着创造点什么新奇的玩意在这些星球上，然后他在地球上造出了亚当和

夏娃，亚当和夏娃经过数千年的繁衍，渐渐的发明了语言，大神觉的很有趣，就把这些语言取了名字String，人类渐渐有了文明

形成了秩序叫做Symbol．上面六种被称作原始数据类型，从无到有．最后，人类发明了编程语言，编程方式叫做面向对象，所以

Object诞生了．

```
null ,undefined,boolean,Number,String,Symbol,Object
```
