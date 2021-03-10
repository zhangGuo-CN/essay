
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
