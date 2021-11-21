const mongoose = require("mongoose");

const momentSchema = new mongoose.Schema(
    {
        profileImage: {
            type: Array,
            default:[]
        },
        title: {
            type: String,
            required: true,
            trim: true,
            max: 100,
        },
        tags: {
            type: Array,
            default:[]
        },
        isDeleted: {
            type: Boolean,
            default:false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Moment", momentSchema);
