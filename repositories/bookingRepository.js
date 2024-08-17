const Booking = require('../models/booking');

const getBooking = async function (criteria) {
    try {
        const booking = await Booking.findOne(criteria);
        return booking;
    } catch (error) {
        
    }
}

module.exports = {
    getBooking
}