// getting-started.js
const mongoose = require('mongoose');
const data = require("./listing.js")
const listing = require("../models/listing.js")
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dreamstay');
insert();
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

async function insert(){
await listing.insertMany(data.data);
}

