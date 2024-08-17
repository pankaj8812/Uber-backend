const Booking = require('../models/booking');

const getBookings = async function (passengerID) {
    try {
        const bookings = await Booking.findById({_id: passengerID, role: 'passenger'});
        return bookings;
    } catch (error) {
        return error;
    }
    
}

module.exports = {
    getBookings
}