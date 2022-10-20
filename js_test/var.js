//var은 재선언, 재할당 다 가능 그래서 문제 생길 수 있기 때문에 이제는 쓰지 않느 걸로! 함수scope

var hello = "hello";
var hello = "hello2"

function sayHello () {
    var hello = "hello hello"
    console.log(hello); //hello hello
}

if(true){
    var hello = "hello hello hello"
}
sayHello()
console.log(hello) // hello

