const express = require("express");
const fileController = require("../controllers/fileController");
const router = express.Router();
const path = require("path");

// this is a test router. i.e. a testyBoi
router.get('/getEverything', fileController.getEverything, (req, res) => { 
    res.status(200).json(res.locals.everything)
});

// this router helps users search stuff.
// hence the endpoint 'search'. 
router.post('/search', fileController.searchUser, (req, res) => {
    res.status(200).json(res.locals.userSearched);
});

// this router helps create users. 
// why am i commenting this? you know this already!
router.post('/createUser', fileController.createUser, (req, res) => {
    res.status(200);
});

// this router sends all that postgres we got from a
// file controller to populate the company
// search dropdown menu in that sick frontend 
router.get('/getCompanies', fileController.getCompanies, (req, res) => {
    res.status(200).json(res.locals.companyNames);
});

// basically the same as getCompanies but, you know, it gets jobs.
router.get('/getJobs', fileController.getJobs, (req, res) => {
    res.status(200).json(res.locals.jobs);
});

module.exports = router;
