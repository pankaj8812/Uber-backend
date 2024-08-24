const User = require('../models/user');

const  createUser  =   async function(userData) {
        try {

            const user = await User.create({
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role
            });

            return user;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

const getAllUsers = async function(){
        try {
            const users = await User.find({});
            return users;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

const getUser = async function (id) {
        try {
            const user = await User.findById(id);
            // if(!user) {
            //     throw new Error("user", id);
            // }
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 

const deleteUser = async function(id) {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            // if(!deleteduser) {
            //     throw new Error("user", id);
            // }
            return deletedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
}