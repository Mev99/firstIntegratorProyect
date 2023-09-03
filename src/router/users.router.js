import { Router } from "express";
import userModel from "../models/user.model.js";
const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try {
        let users = await userModel.find()

        res.send({ result: 'success', payload: users })
    } catch (error) {
        console.error('error on user get', error)
    }
})

userRouter.post('/', async (req, res) => {
    try {
        let { name, email, userId } = req.body

        let result = await userModel.create({ name: name, email: email, userId:userId })

        res.send({ result: "success", payload: result })
    } catch (error) {
        console.error('error on user post', error)
    }
})

export default userRouter