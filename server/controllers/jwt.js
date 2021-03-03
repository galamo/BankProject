const jwt = require("jsonwebtoken")

// var token = jwt.sign({ foo: 'bar' }, process.env.SECRET);

async function signJwtToken(data) {
    return new Promise((resolve, reject) => {
        jwt.sign(data, process.env.SECRET, function (err, token) {
            if (err) reject(err)
            resolve(token)
        });
    })
}
module.exports = { signJwtToken }