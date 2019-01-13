/**
 * @generator
 */
const client = require('../configs/config').client
/**
 *
 * @param {*} param0
 */
function Sending ({ replyToken, msg }) {
  client.replyMessage(replyToken, msg)
}
/**
 * @module
 */
module.exports = {
  Sending
}
