const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Customer = new Schema({

    name: { type: String },
    sdt: { type: String },
    diachi: {type: String},
    date: { type: Date, default: Date.now },
    slug: { type: String, slug: "name", unique: true },

}, {
    //timestamps: true,

});

module.exports = mongoose.model('Customer', Customer);