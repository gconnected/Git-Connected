const path = require("path");
const db = require("../models/userModels.js");
const fileController = {};

// Controller to create a new user. It's barebones right now but it's in good hands
// (yours) to make it better.
// We trust you. We believe in you. We love you.
fileController.createUser = (req, res, next) => {
  console.log(req.body);
  const {
    firstname,
    lastname,
    birthdate,
    city,
    state,
    country,
    job,
    years_exp,
    profile_pic,
    company_name,
  } = req.body;

  const newUserInput = [
    firstname,
    lastname,
    birthdate,
    city,
    state,
    country,
    job,
    years_exp,
    profile_pic,
    company_name,
  ];

  const newUserQuery = `
      INSERT INTO users (
      firstname,
      lastname,
      birthdate,
      city,
      state,
      country,
      job,
      years_exp,
      profile_pic,
      company_name
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

  db.query(newUserQuery, newUserInput)
    .then((data) => console.log(data))
    .then(() => console.log("successfully created new user!"))
    .then(() => next())
    .catch((err) =>
      next(`{ log: 'Express error handler caught error in fileController.createUser',
      status: 400,
      message: { err: ${err} } `)
    );
};

// Method to search for a new user either by company, job, or both. How else are
// users gonna connect with other brilliant tech folks if they can't find said
// brilliant tech folks?  Boom. Thank you searchUser for connecting us
fileController.searchUser = (req, res, next) => {
  console.log(req.query);
  let searched, searchInput;
  const { searchCompany, searchJob } = req.body;
  // const searchInput = [searchCompany, searchJob];
  console.log("searchCompany:", searchCompany, "searchJob:", searchJob);
  if (searchCompany && !searchJob) {
    console.log("first conditional consolelog!");
    searchInput = [searchCompany];
    searched = `SELECT * FROM users WHERE company_name = $1`;
  } else if (!searchCompany && searchJob) {
    console.log("second conditional consolelog!");
    searchInput = [searchJob];
    searched = `SELECT * FROM users WHERE job = $1`;
  } else if (searchCompany && searchJob) {
    console.log("third conditional consolelog!");
    // searchInput.push(searchCompany, searchJob);
    searchInput = [searchCompany, searchJob];
    searched = `SELECT * FROM users WHERE company_name = $1 AND job = $2`;
  } else {
    console.log("something");
  }
  console.log("input:", searchInput);

  db.query(searched, searchInput)
    .then((data) => {
      console.log(data);
      console.log("return query", data.rows);
      res.locals.userSearched = data.rows;
    })
    .then(() => next())
    .catch((err) =>
      next(`{ log: 'Express error handler caught error in fileController.searchUser',
      status: 400,
      message: { err: ${err} } `)
    );
};

// Method to get everything. This does not exist in front end yet.
// We made this to test data retrieval, but left it in here
// out of sheer, unadulterated fun. So. Much. Fun.
fileController.getEverything = (req, res, next) => {
  const everything = `SELECT * FROM users`;

  db.query(everything)
    .then((data) => {
      console.log(data);
      res.locals.everything = data.rows;
      return next();
    })
    .catch((err) =>
      next(
        `{ log: 'Express error handler caught error in fileController.getEverything',
         status: 400,
         message: { err: ${err} }`
      )
    );
};

// Method to pull company list from postgres user table. This allows users to search
// for other users by company. Duh. You knew that.
fileController.getCompanies = (req, res, next) => {
  const getCompanyNames = `SELECT DISTINCT company_name FROM users`;

  db.query(getCompanyNames)
    .then((data) => {
      res.locals.companyNames = data.rows;
      return next();
    })
    .catch((err) =>
      next(
        `{ log: 'Express error handler caught error in fileController.getCompanies',
      status: 400,
      message: { err: ${err} }`
      )
    );
};

// Surprirse, surprise. This method is called get jobs. Guess what it does?
// It gets jobs. "You had one job, getJobs!" It's to get jobs.
// Really, though, this is so front end can show a dropdown menu of jobs for our cherished
// users to search other users by job title!
fileController.getJobs = (req, res, next) => {
  const getJobTitles = `SELECT DISTINCT job FROM users`;

  db.query(getJobTitles)
    .then((data) => {
      res.locals.jobs = data.rows;
      return next();
    })
    .catch((err) =>
      next(
        `{ log: 'Express error handler caught error in fileController.getJobs',
      status: 400,
      message: { err: ${err} }`
      )
    );
};

module.exports = fileController;
