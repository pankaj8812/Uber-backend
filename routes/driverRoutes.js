const express = require('express');

const router = express.Router();


module.exports  = (io) => {
    router.get('/bookings', getDriverBooking);
    router.post('/location', updateLocaion(io));

    return router;
} 