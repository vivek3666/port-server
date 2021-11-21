const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            max: 100,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        hash_password: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: Number
        },
        city: {
            type: String
        }
    },
    { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
    console.log(password);
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    },
};

module.exports = mongoose.model("User", userSchema);
