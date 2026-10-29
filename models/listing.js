const mongoose = require("mongoose");
// getting-started.js

const Schema = mongoose.Schema;
const listSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
 image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
    }
},
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    category: {
        type: String,
    }

})
const listing = mongoose.model("listing", listSchema);
module.exports = listing;
