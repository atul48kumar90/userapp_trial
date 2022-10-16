const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get users list'})
})

const addUser = asyncHandler(async (req, res) => {
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('please add text field')
    }
    res.status(200).json({message: 'User added'})
})

const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update user ${req.params.id}`})
})

const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'User deleted'})
})

module.exports = {
    getUsers, addUser, updateUser, deleteUser
} 