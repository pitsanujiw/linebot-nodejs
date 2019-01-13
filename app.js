'use strict'

const line = require('@line/bot-sdk')
const express = require('express')
const TextRequest = require('./controller/TextRequest.controller').TextRequest
var moment = require('moment-timezone')
moment.tz.setDefault('Asia/Bangkok')
moment.locale('th')

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
}
// create Schedule
// about Schedule itself: https://www.npmjs.com/package/node-schedule
// var schedule = require('node-schedule')

// create Express app
// about Express itself: https://expressjs.com/
const app = express()

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), (req, res) => {
  const event = req.body.events[0]
  TextRequest(event)
    .then(_ => {
      res.sendStatus(200)
    })
    .catch(_ => {
      res.sendStatus(404)
    })
})
// server is runing ..........
/**
 * @author Pitsanujiw
 */
const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  const hostname = server.address().address
  console.log('Server runing .....', hostname, port)
})
