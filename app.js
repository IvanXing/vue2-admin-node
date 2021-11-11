const express = require('express');

// 创建express应用
const app = express();

// 对 / 路径的get进行监听
app.get('/', function(req, res) {
  res.end('hello node')
})

// 监听5000 端口
const server = app.listen(5000, function() {
  const {address, port} = server.address()
  console.log(`Http is running at ${address} : ${port}`)
})