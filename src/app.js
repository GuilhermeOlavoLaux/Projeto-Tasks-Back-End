const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const res = require('express/lib/response');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.get('/',( req, res) =>{
    res.send('Teste')
})

app.listen(3000)