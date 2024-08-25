const express = require('express');

const userController  = require('../../controllers/userController');

const userRouter = express.Router();

// If any request comes and route continues with /ping, we map it to pinguserController
userRouter.get('/ping', userController.pinguserController);

userRouter.get('/:id', userController.getUser);

userRouter.get('/', userController.getUsers);

userRouter.post('/signup', userController.addUser);

userRouter.post('/signin', userController.signin);

userRouter.delete('/:id', userController.deleteUser);

userRouter.put('/:id', userController.updateuser);


module.exports = userRouter;