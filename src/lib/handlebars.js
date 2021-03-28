const { format } = require('timeago.js');


const helpers = {};

// TIME - APP

helpers.timeago = (timestamp) => {
    return format(timestamp);
};

module.exports = helpers;