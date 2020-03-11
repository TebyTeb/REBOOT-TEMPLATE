const router = require('express').Router()

const usersRouter = require('./users.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
