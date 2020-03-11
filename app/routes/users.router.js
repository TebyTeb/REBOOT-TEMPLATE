const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

module.exports = router
