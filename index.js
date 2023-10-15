//dependencies

const http=require('http');
const url=require('url');


//appobject - module scaffolding

const app={};

//configuration
app.config={
    port:3000
};

app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    } );
};

//handle Request Response
app.handleReqRes=(req, res)=>{

    //request handle
    const parsedUrl=url.parse(req.url, true);
    const path=parsedUrl.pathname;


    //response handling    
    res.end('Hello Programmers');
};

//start the server
app.createServer();


