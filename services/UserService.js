const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const createUser =   async function(userData) {

        const user = await userRepository.createUser(userData);

        return user;
    }

const getAllUsers = async function() {
        const users = await userRepository.getAllUsers();
        return users;
    }

const getUser = async function(userId) {
        const user = await userRepository.getUser(userId);
        return user;
    }

const deleteUser =  async function(userId) {
        const user = await userRepository.deleteUser(userId);
        return user;
}


const signin = async function(userData){
    try {
        const user =  await userRepository.getUserByEmail({email: userData.email});
        console.log(userData.password,  user.password);
        if(!user || !(bcrypt.compare(userData.password, user.password))){
            throw new error('Invalid email or password');
        }
        const token  = jwt.sign({id: user._id}, process.env.JWT_SECERT, {expiresIn: '1h'});
        return {user,token};
    } catch (error) {
        throw error;
    }
}


module.exports =  {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    signin,
};