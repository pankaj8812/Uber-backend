const userService  = require('../services/UserService');
const  StatusCodes = require('http-status-codes');


function pinguserController(req, res) {
    return res.json({message: 'User controller is up'});
}

async function addUser(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const newUser = await userService.createUser(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new user',
            error: {},
            data: newUser
        })
    } catch(error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const user = await userService.getUser(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: 'Successfully fetched a user',
            data: user
        })
    } catch(error) {
        next(error);
    }
}

async function getUsers(req, res, next) {
    try {
        const response = await userService.getAllUsers();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the users',
            error: {},
            data: response
        });
    } catch(error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const deleteduser = await userService.deleteUser(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the user',
            error: {},
            data: deleteduser
        });
    } catch(error) {
        next(error);
    }
}

function updateuser(req, res, next) {
    try {
        // nothing implemented
        throw new error('Add user');
    } catch(error) {
        next(error);
    }
}

module.exports = {
    addUser,
    getUser,
    getUsers,
    deleteUser,
    updateuser,
    pinguserController
}

/**
 * 
 * res
 * 
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 * 
 */