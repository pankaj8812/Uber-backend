const express = require('express');
const passagerController = require('../controllers/passengerController');

const router = express.Router();


module.exports  = (io) => {
    router.get('/bookings', passagerController.getPassengerBooking);
    router.post('/feedback', passagerController.provideFeedback);

    return router;
}