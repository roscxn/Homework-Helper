const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    commentUrl: String,
  },
  {
    timestamps: true,
  }
);

const postSchema = new Schema (
    {
        name: String,
        imageUrl: String,
        description: String,
        topic: { type: String, required: true },
        subject: { type: String, required: true },
        level: { type: String, required: true },
        comments: [commentSchema],
    }
    ,{
        timestamps: true,
    }
);


module.exports = mongoose.model("Post", postSchema);
