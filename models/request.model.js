/**
 * 
 * @param {object} data 
 */
function Modeldata (data) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve({
        replyToken: `${data.replyToken}`,
        msg: {
          type: `${data.type}`,
          text: `${data.response}`
        }
      })
    } else {
      reject()
    }
  })
}

module.exports = {
  Modeldata
}
