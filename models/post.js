const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
        topic: String,
        subject: String,
        level: String,
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("Post", postSchema);