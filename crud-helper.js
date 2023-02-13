require('dotenv').config()
require('./config/database')

const User = require('./models/user')

// Require all of the future mongoose models

// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// setting up local variables to help test the future models
let user, item, category, order;
let users, items, categories, orders;