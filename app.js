
// le return va retouner soit true soit false
function verifyEmail(email) {
   return email.includes('@')
}

function verifyPassword(password) {
   return password.length >= 8
}

module.exports = {verifyEmail, verifyPassword}