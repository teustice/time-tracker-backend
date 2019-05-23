const mongoose = require('mongoose');

//FreshBooks Reference: https://www.freshbooks.com/api/time_entries
let TimerSchema = new mongoose.Schema({
    clientID: {type: Number, required: false},
    projectID: {type: Number, required: false},
    duration: {type: Number, required: true},
    isLogged: {type: Boolean, required: true},
    note: {type: String, required: true},
    startedAt: {type: Date, required: true}
});

export default TimerSchema;
