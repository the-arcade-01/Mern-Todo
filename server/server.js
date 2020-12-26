const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('hello world');
});

app.listen(5000,'localhost',()=>console.log(`Server is running on 5000`));