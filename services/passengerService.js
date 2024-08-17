const bookingRepository = require('../repositories/bookingRepository');
const passengerRepository = require('../repositories/passengerRepository')

const getPassengerBookings = async function (passengerID) {
    try {
        const booking = await passengerRepository.getBookings(passengerID);
        if(!booking) 
            throw new Error('No booking found for this user');
        return booking;
    } catch (error) {
        return error;
    }
}

const provideFeedback = async function (passengerID, bookingId, rating, feedback) {
    try {
        const booking = await bookingRepository.getBooking({passenger: passengerID, _id: bookingId});
        if(!booking) 
            throw new Error('Booking not found')
        booking.rating = rating;
        booking.feedback = feedback;
        await booking.save();
    } catch (error) {
        return error;
    }
}

module.exports = {getPassengerBookings, provideFeedback};