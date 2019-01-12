const SendResponse = require('./SendResponse.controller').SendResponse
const Modeldata = require('../models/request.model').Modeldata
const client = require('../configs/config').client

function TextRequest (event) {
  const Text = event.message.text
  let response
  const token = event.replyToken
  const type = 'text'
  return new Promise((resolve, reject) => {
    switch (Text) {
      case 'สวัสดี':
      case 'สวัสดีครับ':
      case 'สวัสดีค่ะ':
        response = 'สวัสดีครับทุกคน 💕'
        const data = { replyToken: token, type: type, response: response }
        Modeldata(data)
          .then(res => {
            SendResponse(res)
          })
          .catch(err => {
            reject()
          })
        break
      case 'วันที่':
        resolve()
        break
      default:
        Modeldata({ replyToken: token, type: type, response: 'งงเลยงับ' })
          .then(res => {
            SendResponse(res)
          })
          .catch(_ => {
            reject()
          })
        break
    }
  })
}
module.exports = { TextRequest }
