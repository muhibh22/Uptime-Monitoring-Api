//dependencies

const http=require('http');
const handler=require('./helpers/handlereqres');

//appobject - module scaffolding

const app={};

//configuration
app.config={
    port:3000
};

app.createServer=()=>{
    const server=http.createServer(handler.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    } );
};



//start the server
app.createServer();


