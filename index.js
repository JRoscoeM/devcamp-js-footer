'use strict'; // means that everything has to be followed to the letter of the 
//JS law because you don't know what other kinds of packages or applications
//might be using your code and it might break their application


var moment = require('moment');
// at first, I obviously don't have the moment dependency to bring in
// so I need to get that dependency from the registry

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};