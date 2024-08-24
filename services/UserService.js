const userRepository = require('../repositories/userRepository');

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



module.exports =  {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
};