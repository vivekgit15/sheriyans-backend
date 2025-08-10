const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Ye sab middlleware hai 
// app.use(function(req, res , next){
//     console.log("Middleware chal gaya");
//     next()
    
// })
// app.use(function(req, res , next){
//     console.log("Middleware fir se chal gaya");
//     next()
    
// })

app.get('/',function(req,res){
    res.send('Hello world i am learning backend')
})
app.get('/profile',function(req,res,next){
    return next(new Error('Something went wrong'))
})

app.use((err, req, res, next) =>  {          //  Error handler
    console.log(err.stack)
    res.status(500).send('Something broke')
    
})


 app.listen(3000) 