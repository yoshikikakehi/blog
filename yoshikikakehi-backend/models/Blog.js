const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        date: {
            type: String,
        },
        content: {
            type: String,
        },
    },
    { collection: "yoshikiblog" },
);

module.exports = mongoose.model("yoshikiblog", BlogSchema);