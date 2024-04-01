
import userModel from "../models/userModel.js";
import { hashePassword } from './../helpers/authHelpers.js';

const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if (!name) {
            return res.send({ message: "Name is required" })
        }
        if (!email) {
            return res.send({ message: "Email is required" })
        }
        if (!password) {
            return res.send({ message: "Password is required" })
        }
        if (!phone) {
            return res.send({ message: "Phone is required" })
        }
        if (!address) {
            return res.send({ message: "Name is Address" })
        }
        // check user already exist then login only
        const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(200).send({
                success: true,
                message: "Already Registered just login"
            })
        }
        // register user
        const hashedPassword = await hashePassword(password);
        // create new user
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();
        return res.status(202).send({
            success:true,
            message:"User Register successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error
        })
    }
}

export { registerController };