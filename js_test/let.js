// let은 재선언 불가능, 재할당은 가능, 중괄호 scope

let hello = 'first hello';

if(true){
    let hello = 'second hello'
    console.log(hello); // second hello
}
console.log(hello) // first hello 