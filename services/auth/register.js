const { register } = require('../../queries/auth')
const { encrypt, } = require('../../helpers/hash')

module.exports = (db) => async (req, res, next) => {
  const { password, email, username } = req.body

  if (!username || !email || !password) {
    return next({
      error: new Error('username, email or password needed')
    })
  }

  const hash = await encrypt(password)

  const result = await register(db)({ ...req.body, hash })

  if (result.error) {
    return next({
      error: new Error(result.message)
    })
  }

  res.status(200).json({
    success: true
  })
}