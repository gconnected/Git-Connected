const fs = require('fs');
const path = require('path');
const db = require('../models/userModels.js');
const fileController = {};

fileController.createUser = (req, res, next) => {
   // set variable that holds query string
   // const users = ""
}

fileController.getEverything = (req, res, next) => {
   const everything = 'SELECT * FROM users';
   console.log('HELLO');

   db.query(everything)
   .then(data => {
      console.log(data);
      res.locals.everything = data.rows;
      return next();
   })
   .catch(err => next(`{ log: 'Express error handler caught error in starWarsController.getSpecies',
   status: 400,
   message: { err: ${err} }`))
}

fileController.searchUser = (req, res, next) => {
   // console.log('req req req req req:', req);
  let searched;
   const { searchCompany, searchJob } = req.body;
   // ==> searchCompany = 'Amazon'
   console.log('searchCompany:', searchCompany);
   const searchInput = [searchCompany, searchJob];
   if (searchCompany && !searchJob) {
     console.log(searchInput)
      searched = 'SELECT users.* FROM users WHERE company_name = $1'
   } else if (!searchCompany && searchJob) {
      console.log(2)
      searched = 'SELECT users.* FROM users WHERE company_name = $2'
   } else if (searchCompany && searchJob) {
     console.log(3)
      searched = 'SELECT users.* FROM users WHERE company_name = $1 AND job = $2'
   } else {
      console.log('something')
   }
   console.log('searched:', searched, 'searchInput:', searchInput)
   db.query(searched, [searchCompany])
   .then((data) => {
      console.log('return query', data.rows);
      res.locals.userSearched = data.rows
   })
   .then(() => next())
   .catch((err) =>
      next(`{ log: 'Express error handler caught error in fileController.searchUser',
      status: 400,
      message: { err: ${err} } `)
      ); 
}

module.exports = fileController;