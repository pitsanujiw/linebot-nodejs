var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
require('dotenv').config()

app.use(bodyParser.json())

app.set('port', process.env.PORT || 4000)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/hello', (req, res) => {
  res.send('Hello line bot')
})
app.get('/', (req, res) => {
  res.send('Hello line bot')
})

app.post('/webhook', (req, res) => {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])
  if (text === 'สวัสดี' || text === 'ควยไรแน็ค' || text === 'ไงแน็ค') {
    sendText(sender, text)
  }
  res.sendStatus(200)
})

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'กวยไรคับ'
      }
    ]
  }
  request(
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer key Apit1nBzbDCnZ5aX/kBpRZHqxP3kn3vm+HJFSs0ekFMD9799yPv/p9yeNq4fQ9qMDc5htjnYr7RW7SMvbu4OwH3Tzrz78L4rocNHtvYPvUWm3Rp5BNi+cFxXN/IPXJRn1htdivdiHGJRgxIUiHf3GLeNAdB04t89/1O/w1cDnyilFU='
      },
      url: 'https://api.line.me/v2/bot/message/push',
      method: 'POST',
      body: data,
      json: true
    },
    function (err, res, body) {
      if (err) console.log('error')
      if (res) console.log('success')
      if (body) console.log(body)
    }
  )
}

server = app.listen(process.env.PORT, function () {
  console.log(process.env.PORT)
  console.log('run at port', server.address().port)
})
