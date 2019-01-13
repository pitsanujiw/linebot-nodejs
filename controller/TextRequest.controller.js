const client = require('../configs/config').client
const Sending = require('./Sending.controller').Sending
/**
 *
 */
const Modeldata = require('../models/request.model').Modeldata
const SendResponse = require('./SendResponse.controller').SendRequest
/**
 * 
 * @param {*} event 
 */

function TextRequest (event) {
  console.log(event)
  const Text = event.message.text
  const Type = event.message.type

  const token = event.replyToken
  const data = {
    token,
    Text,
    Type
  }
  return new Promise((resolve, reject) => {
    if (event.source.groupId) {
      SendResponse(data)
      resolve('ok')
    } else {
      SendResponse(data)
      resolve('ok')
    }
  })
}
module.exports = { TextRequest }
