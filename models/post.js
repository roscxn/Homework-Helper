const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
        name: String,
        topic: String,
        subject: String,
        level: String
    }
    ,{
        timestamps: true,
    }
);


module.exports = mongoose.model("Post", postSchema);
