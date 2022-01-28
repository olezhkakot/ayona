const express = require('express');
const app = express();
const path = require('path');
const PORT = 3400;

app.use(express.static(__dirname+'/public'));

app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
    console.log('got a request;')
})
app.get('/office', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/public/officeNew.html'));

})
app.get('/flagship', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/public/fedBlocks.html'));

})


app.get('/offices', (req,res,next) => {
    res.sendFile(path.join(__dirname+ '/public/officeBlocks.html'));
})

app.get('/city', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/public/images/big.jpg'));
})



app.listen(PORT,()=>{
    console.log('server started at 3400');
})

console.log(__dirname + '/public/images');

