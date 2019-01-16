const express = require('express');
const app = express();
const port = 3000;
const math_method = require('./math');
// const routes = require('./routes/index')

app.get(`/math/add`,(req,res) => {

    console.log(req.query)
    console.log(Object.values(req.query));
    res.sendStatus(math_method.add()) 

})
app.get(`/math/multiply`,(req,res) => {
   
        console.log(req.query)
        console.log(Object.values(req.query));
        console.log(typeof math_method)
        res.sendStatus(math_method.multiply())
    
    })



app.listen(port, () => {
    console.log(`listening for port...`,)
})   

// app.add(a+b){
//     return a + b
// }
// console.log(add)
// 
