const {StringDecoder}=require('string_decoder'); //here StringDecoder is a class
const url=require('url');

//handle Request Response
const handler={};
handler.handleReqRes=(req, res)=>{

    //request handle
    const parsedUrl=url.parse(req.url, true);
    const path=parsedUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/+$/g,'');
    const method= req.method.toLowerCase();
    const queryString=parsedUrl.query;
    const headersObject=req.headersObject;
    const decoder=new StringDecoder('utf-8');
    let realData='';

    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer);
    });

    req.on('end', ()=>{
        realData+=decoder.end;
         //response handling    
        res.end('Hello Programmers');
    });
};

module.exports=handler;