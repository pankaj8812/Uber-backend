const Booking = require('../models/booking');

const getBookings = async function (passengerID) {
    try {
        const bookings = await Booking.findById({_id: passengerID, role: 'passenger'});
        return bookings;
    } catch (error) {
        return error;
    }
    
}
const  createUser  =   async function(problemData) {
    try {

        const user = await User.create({
            title: problemData.title,
            description: problemData.description,
            codeStubs: problemData.codeStubs,
            testCases: (problemData.testCases) ? problemData.testCases : []
        });

        return user;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getBookings,
    createUser,
}