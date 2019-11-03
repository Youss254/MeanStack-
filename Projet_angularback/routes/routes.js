const express = require('express');
const router = express.Router();
const Session = require('../models/sessions');
const Formateur = require('../models/formateurs');
const Participant = require('../models/participants');

//get all sessions
router.get('/sessions', function(req, res, next) {
   // res.send('Liste des sessions de formations');
    Session.find(function(err, sessions){
        res.json(sessions);
    });
});

//get one session
router.get('/session/:id', function(req, res, next) {
    // res.send('Liste des sessions de formations');
    Session.findOne({_id: req.params.id},function(err, sessions){
        res.json(sessions);
    });
});
//ajouter session
router.post('/session', (req, res, next)=>{
   // res.send('Ajouter une session');
    //create new session from request
    const newSession = new Session(
    {name: req.body.name,
    track:req.body.track,
    formateur:req.body.formateur,
    date:req.body.date,
    duree: req.body.duree,
    adress: req.body.adress,
    participants: req.body.participants,
    isCompleted: false
	});
console.log(newSession);
    //insert into database
    newSession.save((err)=>{
        if (err)
        {
            res.json({msg: 'Failed to add session'});
        }
        else {
            res.json({msg: 'Session added successfully'});
        }
    });
});

//supprimer session
router.delete('/session/:id', (req, res, next)=>{
    Session.remove({_id: req.params.id}, function(err, result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//modifier une session
router.put('/update/:id', (req, res) => {
    Session.update({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                track: req.body.track,
                formateur: req.body.formateur,
                date: req.body.date,
                duree: req.body.duree,
                adress: req.body.adress,
                participants: req.body.participants,
                isCompleted: req.body.isCompleted,
            }
        },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        });
});


//get all formateur
router.get('/formateurs', function(req, res, next) {
    // res.send('Liste des sessions de formations');
     Formateur.find(function(err, formateurs){
         res.json(formateurs);
     });
 });
 
 //get one formateur
 router.get('/formateur/:id', function(req, res, next) {
     Formateur.findOne({_id: req.params.id},function(err, formateurs){
         res.json(formateurs);
     });
 });
 //ajouter formateur
 router.post('/formateur', (req, res, next)=>{

    const newFormateur = new Formateur({
        name: req.body.name,
        lastName:req.body.lastName,
        etat:req.body.etat,
        nbSessions:req.body.nbSessions
    });
     //insert into database
     newFormateur.save((err)=>{
         if (err)
         {
             res.json({msg: 'Failed to add formateur'});
         }
         else {
             res.json({msg: 'formateur ajouté avec succés'});
         }
     });
 });
 
 //supprimer formateur
 router.delete('/formateur/:id', (req, res, next)=>{
     Formateur.remove({_id: req.params.id}, function(err, result){
         if (err)
         {
             res.json(err);
         }
         else
         {
             res.json(result);
         }
     });
 });

 //modifier un formateur
router.put('/updateFormateur/:id', (req, res) => {
    Formateur.update({_id: req.params.id}, {
        $set: {
            name: req.body.name,
            lastName:req.body.lastName,
            etat:req.body.etat,
            nbSessions:req.body.nbSessions
        }
    },

    (err, result) => {
        if (err) return res.send(err)
            res.send(result)
    });
});

//get all participants
router.get('/participants', function(req, res, next) {
    // res.send('Liste des sessions de formations');
     Participant.find(function(err, participants){
         res.json(participants);
     });
 });

 //get one participant
router.get('/participant/:id', function(req, res, next) {
    // res.send('Liste des sessions de formations');
    Participant.findOne({_id: req.params.id},function(err, participants){
        res.json(participants);
    });
});

//ajouter participant
router.post('/participant', (req, res, next)=>{
    const newParticipant = new Participant(
    {name: req.body.name,
     cin: req.body.cin,
     nbsessions:req.body.nbsessions
    });
console.log(newParticipant);
    //insert into database
    newParticipant.save((err)=>{
        if (err)
        {
            res.json({msg: 'Failed to add participant'});
        }
        else {
            res.json({msg: 'Participant added successfully'});
        }
    });
});

//supprimer participant
router.delete('/participant/:id', (req, res, next)=>{
    Participant.remove({_id: req.params.id}, function(err, result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//modifier un participant
router.put('/updateparticipant/:id', (req, res) => {
    Participant.update({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                cin: req.body.cin,
                nbsessions: req.body.nbsessions
            }
        },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        });
});


module.exports = router;