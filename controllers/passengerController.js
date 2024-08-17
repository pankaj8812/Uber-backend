const passengerService = require('../services/passengerService');

const getPassengerBooking = async(req,res) =>{
    try {
        const bookings = await passengerService.getPassengerBookings(req.user.id);
        res.status(201).send({
            data: bookings,
            success: true,
            error: null, 
            message: 'Retreived passenger bookings'
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        })
    }
};

const provideFeedback = async(req,res) =>{
    try {
        const {bookingId, rating, feedback} = req.body;
        await passengerService.provideFeedback(req.user.id, bookingId, rating, feedback);
        res.status(201).send({
            success: true,
            error: null, 
            message: 'feedback submitted'
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    getPassengerBooking,
    provideFeedback,
}