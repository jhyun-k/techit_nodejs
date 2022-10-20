const http = require("http")

/* http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.end("<p>Hello World!!</p>");
}).listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료")
})
 */
http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200);
        res.end("main url");
    }else if(req.url === "/upload"){
        res.writeHead(200)
        res.end("upload url")
    }else if(req.url === "/delete"){
        res.writeHead(200)
        res.end("delete url")
    }else{
        res.writeHead(404)
        res.end("Not Found")
    }
}).listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료")
})

//localhost 현재 컴퓨터의 내부주소 , 서버개발할 때 테스트용으로 많이 쓰인다 localhost = 127.0.0.1
//127.0.0.1 IP
//포트(port) 서버 내의 프로세스를 구분하는 번호
//서버에서는 다양한 일을 처리합니다 (HTTP, DB 등등)