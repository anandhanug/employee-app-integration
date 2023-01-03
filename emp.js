const mongoose = require("mongoose");

const schema = mongoose.Schema;

const empSchema = new schema({
    name: String,
    location: String,
    position: String,
    salary: Number

})

const EMPModel = mongoose.model("employs", empSchema); 

module.exports = EMPModel;
