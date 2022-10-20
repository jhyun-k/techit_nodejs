//pending
//fullfilled
//reject

function sayHello () {
    return new Promise((resolve,reject)=>{
        resolve("hello")
    })
}

/* sayHello().then((resolvedData)=>{
    console.log(resolvedData)
    return resolvedData
}).then((resolvedData)=>{
    console.log(resolvedData)
    return resolvedData
}).then((resolvedData)=>{
    console.log(resolvedData)
})
.catch((error)=>{
    console.log(error);
}) */

async function test() {
    const hello1 = await sayHello();
    console.log(hello1)
}

test();