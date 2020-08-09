var mongoose = require("mongoose");

var infoSchema = mongoose.Schema({
    name : String,
    email : String,
    dob : String,
    password : String,
});

const Info = mongoose.model("Info", infoSchema);
module.exports = Info;