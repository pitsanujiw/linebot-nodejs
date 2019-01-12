const client = require('../configs/config').client
function SendResponse ({ replyToken, msg }) {
  client.replyMessage(replyToken, msg)
}
module.exports = {
  SendResponse
}
