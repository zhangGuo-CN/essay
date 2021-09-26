只存在全局初始化，没有局部初始化。
函数级别的初始化，实际上已经是在执行函数的阶段进行的了。
1.创建一个全局对象 (Global Object) ， 只存在一份，它的存在伴随着应用程序的整个生命周期。
由于这个全局对象不能通过名字直接访问，因此还有另外一个属性 window, 并将 window 指向了自身，这样就可以通过 window 访问这个全局对象了。
var globalObject = {
    Math:{},
    String:{},
    Date:{},
    document:{},//DOM操作
    ...
    window:this//让window属性指向了自身
                //在使用 window 对象时，会通过scope chain（作用域链）往上查
}

GlobalECObj = {
    [[Scope]] : [VO],
    VO : {
        foo : fnFoo,
        a : "outer"
    },
    this : {}
}

ECObj = {
    [[Scope]] : [
        {AO},
        {GlobalVO}
    ],
    AO: {
        arguments: {
                0: 22,
                length: 1
        },
        i: 22,
        c: pointer to function c()
        a: undefined,
        b: undefined
    },
    this: { ... }
}
