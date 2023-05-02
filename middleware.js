// In between operation for req and response

// const express = require('express')
// const app = express()

// app.use(enter)
// app.get("/", (req, res) => {
//     console.log("After Middleware")
//     res.send("Pls Welcome")
// })

// function enter(req, res, next) {
//     console.log("In Middleware")
//     next()
// }

// app.listen(3000)

// const express = require ('express')
// const app = express()

// app.use(enter)
// app.get("/",islogin,(req,res) => {
//     console.log("After Middleware")
//     res.send("Pls Welcome")
// })

// function enter(req,res,next){
//     console.log("In middleware")
//     next()
// }

// function islogin(req,res,next){
//     if(req.query.islogin === "true"){
//         console.log("Login User")
//         next()
//     }else{
//         res.send("Access Denied")
//     }
// }

// app.listen(3000,()=>{
//     console.log("Server Started")
// })


const express = require('express');
const app = express();
function format(data,status,message) {
    return status,
    message,
    data    
};
app.use((err,req,res,next)=>{
    res.status(500).json(format(null,500,err))
}
)
app.use((req,res,next)=>{
    console.log("middleware 1");
    next();
});
app.use((req,res,next)=>{
    console.log("middleware 2");
    next();
})
app.use((req,res,next)=>{
    // res.send("middleware 3")
    console.log("middleware 3");
    next();
})
function middleware1(req,res,next){
    console.log("middleware 1");
    next();
}
function middleware2(req,res,next){
    console.log("middleware 2");
    next();
}
app.get("/app",middleware2,(req,res)=>{
    res.send("dsds")
})
app.listen(8080,()=>{
    console.log("server started ");
})