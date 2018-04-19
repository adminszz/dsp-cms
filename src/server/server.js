const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express()
const api = require('./api')

app.use(bodyParser.json())
// jwt.verify（token，secretOrPublicKey，[options，callback]）

//设置跨域 cors
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:8080")
    res.header("Access-Control-Allow-Headers","Content-Type,Token,plantform")
    res.header('Content-Type',"application/json;charset=utf-8")
    next()
})
app.use(express.static('./'))
//启动后端接口
api(app)
// /dsp-report/index 首页
// dsp-admin/user/login 登录页
app.listen(9000,function(){
    console.log('server listen 9000')
})

