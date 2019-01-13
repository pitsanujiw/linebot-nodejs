/**
 * API @implements
 */
const apiai = require('apiai')
/**
 *
 * @global _appapi
 */
/**
 * @license
 */
require('dotenv').config()
/**
 * @function import
 */
const Modeldata = require('../models/request.model').Modeldata
const Sending = require('./Sending.controller').Sending

/**
 * @generator
 */
const _appapi = apiai(process.env.KEY_DIALOGFLOW)
const uniqid = require('uniqid')
/**
 *
 * @param {String} Text @function SendRequest()
 */
function SendRequest ({ token, Text, Type }) {
  console.log(token, Text, Type)
  var request = _appapi.textRequest(Text, {
    sessionId: uniqid()
  })
  /** */
  request.on('response', function (response) {
    console.log(response)
    const ResponseSpeech = response.result.fulfillment.messages[0].speech
    const data = {
      replyToken: token,
      type: Type,
      response: ResponseSpeech
    }
    Modeldata(data)
      .then(res => {
        Sending(res)
      })
      .catch(_ => {
        reject()
      })
  })
  request.on('error', function (error) {
    console.log(error)
  })
  request.end()
}

/**
 * @exports @static
 */
module.exports = {
  SendRequest
}
