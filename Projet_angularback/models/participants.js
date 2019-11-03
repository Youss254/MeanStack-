const mongoose = require('mongoose');
const SessionSchema = mongoose.Schema({ 
    name:{
        type: String, 
        required: true 
    }, 
    cin:{
        type: Number, 
        required: true 
    },
    nbsessions:{
        type: Number, 
        required: true 
    },
});
const Participant = module.exports = mongoose.model('Participant', SessionSchema);