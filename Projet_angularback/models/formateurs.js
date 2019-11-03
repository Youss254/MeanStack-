const mongoose = require('mongoose');
const FormateurSchema = mongoose.Schema({ //cle/valeur
    name:{
        type: String, 
        required: true 
    }, 
    lastName:{
        type: String, 
        required: true 
    },
    etat:{
        type: String,
        required: true
    },
    nbSessions:{
        type: Number,
        required: true
    }
});
const Formateur = module.exports = mongoose.model('Formateur', FormateurSchema);