const mongoose = require('mongoose');

//FreshBooks Reference: https://www.freshbooks.com/api/time_entries
let TimerSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    clientID: {type: Number, required: false},
    project: {type: String, required: false},
    service: {type: String, required: true},
    duration: {type: Number, required: true},
    isLogged: {type: Boolean, required: true},
    note: {type: String, required: false},
    startedAt: {type: Date, required: true},
    initialStartTime: {type: Date, required: true}
});

export default TimerSchema;
