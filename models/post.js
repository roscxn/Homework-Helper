const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: String,
    content: { type: String, required: true },
    commentUrl: { type: String, match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ },
  },
  {
    timestamps: true,
  }
);

const postSchema = new Schema (
    {
        name: String,
        imageUrl: { type: String, match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ },
        description: String,
        topic: { type: String, minlength: 5, maxlength: 50, required: true },
        subject: { type: String, enum: ["AM", "EM", "Additional Mathematics", "Elementary Mathematics"], required: true },
        level: { type: String, enum: ["S1", "S2", "S3", "S4", "Sec 1", "Sec 2", "Sec 3", "Sec 4", "Sec 5"], required: true },
        comments: [commentSchema],
    }
    ,{
        timestamps: true,
    }
);


module.exports = mongoose.model("Post", postSchema);
