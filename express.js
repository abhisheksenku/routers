const express = require('express');
const app = express();
const port = 3000;
const bookRoute = require('./routes/books');

app.use((req,res,next)=>{
    console.log(`${req.method} request is made to ${req.url}`);
    next();
})
app.use('/books',bookRoute);
app.use((req,res)=>{
    res.status(404).send('<h1>404 Page not found</h1>');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
