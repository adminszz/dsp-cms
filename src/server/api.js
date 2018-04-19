const jwt = require('jsonwebtoken')
const http = require('http');
const querystring = require('querystring')
const fs = require('fs')
//const Mock = require('mockjs')
const _ = require('lodash')
const express = require('express');
var multer = require('multer')
let app = express()

var storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let filename = file.originalname.split('.')
    cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
  }
});

var upload = multer({
  storage: storage
});

module.exports = function (app) {

  //注册接口
  app.post('/user/register', function (req, res) {
    let user = fs.readFileSync('user.json', { encoding: "utf-8" });
    user = JSON.parse(user);
    user.push(req.body);
    fs.writeFile('user.json', JSON.stringify(user), function () {
      res.end(JSON.stringify({
        "success": 0,
        "info": "register success"
      }))
    })
  })

  //login api
  app.post('/dsp-admin/user/login', function (req, res) {
    let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" });
    user = JSON.parse(user);
    let login = req.body;
    let resInfo = {
      success: 1,
      info: "用户名或密码错误",
      token: ''
    }
    user.forEach(usr => {
      if (usr.username == login.username && usr.password == login.password) {
        resInfo.success = 0;
        resInfo.info = "login success";
        resInfo.user = {
          name: usr.username,
          time: new Date().toLocaleTimeString(),
          nickName: "Jacky"
        }
      }
    });
    if (resInfo.success == 0) {
      resInfo.token = jwt.sign(login, "1511", {
        expiresIn: 60 * 60
      })
    }
    res.end(JSON.stringify(resInfo))
  })
  app.post('/dsp-report/index', function (req, res) {
    let prevY = req.body.startTime.split('/')[0]
    let nextY = req.body.endTime.split('/')[0]
    let prevM = req.body.startTime.split('/')[1] * 1
    let nextM = req.body.endTime.split('/')[1] * 1
    let len = (nextY - prevY) * 12 + (nextM - prevM)
    let newrandom = []
    for (let i = 0; i <= len; i++) {
      let random = Math.floor(Math.random() * (1500 + 1))
      newrandom.push(random)
    }
    res.send({
      "status": 0,
      "data": {
        exposeNum: 10000, //曝光量
        clickNum: 1000, // 点击量
        clickRate: 100,  // 点击率
        clickPrice: 10000, // 点击均价
        cpmPrice: 200000, // 千次展示均价
        consumed: 1000, // 时间段消耗(单位分)
        dataY1: newrandom,
        dataY2: newrandom
      }
    })
  })
  //  新建创意上传图片 /dsp-creative/creative/upload

  app.post('/dsp-creative/creative/upload', upload.single('file'), function (req, res) {
    res.send({
      "data": {
        "size": req.file.size,
        "value": req.file.path,
        "key": "2A36B67C6"
      },
      "status": 0
    })
    // 失败示例
    // {
    // "status":1, // 具体错误码请参考全局错误说明
    // "global":"errorMsg"
    // }
  })

  // 保存创意接口
  // http://dsp.zybang.com/dsp-creative/creative/save
  app.post('/dsp-creative/creative/save', function (req, res) {
    let list = JSON.parse(fs.readFileSync('./creativeList.json'))
    let obj = {
      src: req.body.imageUrl,
      id: 12313-4,
      type: req.body.item,
      size: '320* 240',
      luolink: req.body.address,
      celink: req.body.copy,
      element: 12345,
      plan: 'DD-广告',
      baonumber: 3456,
      activenumber: 1000,
      state: '投放中'
    }
    list.push(obj)
    fs.writeFileSync('./creativeList.json', JSON.stringify(list))
    res.send({
      "status":0,
      "message": "广告创意保存成功"
    })
  })
}


