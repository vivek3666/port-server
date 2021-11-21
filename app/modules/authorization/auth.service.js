/*
import {User} from "../authorization/data-access/schemas/user.schema";
import {Constants} from "./data-access/constants/constants";
import jwt from "jsonwebtoken";

export class AuthService {
    registerUser(bodyUser) {
        return new Promise((resolve, reject) => {
            User.findOne({email: bodyUser.email}).exec((err, user) => {
                if (err) {
                    reject({
                        message: err,
                    });
                } else {
                    if (user) {
                        reject({message: Constants.userAlreadyPresent});
                    } else {
                        const {firstName, lastName, password, email, phoneNo, city} = user;
                        const _user = new User({firstName, lastName, password, email, phoneNo, city});
                        _user.save().then((data) => {
                            if (data) {
                                resolve({
                                    result: 'success'
                                });
                            }
                        }).catch((err) => {
                            reject({
                                message: err,
                            });
                        });
                    }
                }
            });
        });
    }

    login(bodyUser) {
        return new Promise((resolve, reject) => {
            User.findOne({email: bodyUser.email}).exec((err, user) => {
                if (err) {
                    reject({message: err});
                } else {
                    if (user) {
                        if (user.authenticate(req.body.password)) {
                            const token = this.generateToken(user);
                            res.status(200).json({token, user});
                        } else {
                            reject({
                                message: "Invalid Password",
                            });
                        }
                    } else {
                        reject({
                            message: "User doesnt exist. Please SignUp",
                        });
                    }
                }
            });
        });
    }

    generateToken(user) {
        return jwt.sign(
            {_id: user._id, email: user.email},
            "JWT_SECRET",
            {expiresIn: "1d"}
        );
    }

}*/
