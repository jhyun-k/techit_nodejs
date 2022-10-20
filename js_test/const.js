// const 는 재선언, 재할당 다 불가능, 중괄호 scope

const hello = "first hello"

if(true){
    const hello = "second hello"
    console.log(hello) //second hello
}

console.log(hello) // first hello