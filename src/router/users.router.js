import { Router } from "express";
import passport from "passport";

import userModel from "../models/user.model.js";
import initializePassport from "../config/passport.config.js";

const userRouter = Router()

userRouter.get("/current", async (req, res) => {
    const {first_name, last_name, email, age} = req.session.user
    res.render('current', {first_name, last_name, email, age})
})

userRouter.get('/register', async (req, res) => {
    res.render('register')
})

userRouter.post("/register", passport.authenticate("register", { failureRedirect: "/user/register" }), async (req, res) => {

    const { first_name, last_name, email, age, password } = req.body
    console.log(req.body)

    if (!first_name || !last_name || !email || !age || !password) {
        return res.status(400).send('missing information');
    }


    // res.write({payload: createUser})
    res.redirect("http://localhost:8080/user/login")
    // res.send({ status: "success", payload: createUser });
})




userRouter.get('/login', async (req, res) => {
    res.render('login')
})

userRouter.post("/login", passport.authenticate("login", { failureRedirect: "/user/login" }), async (req, res) => {
    if (!req.session.user) {
        return res.status(400).send("Usuario no encontrado")
    }
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        age: req.user.age
    }
    res.send({ status: "success", payload: req.user })
}
)

userRouter.get('/', async (req, res) => {
    try {
        let users = await userModel.find()

        res.send({ result: 'success', payload: users })
    } catch (error) {
        console.error('error on user get', error)
    }
})

userRouter.get('/:uid', async (req, res) => {
    try {
        let paramId = req.params
        let searchById = await userModel.find({ userId: paramId.uid })
        res.send({ payload: searchById })

    } catch (error) {
        console.error(error)
    }
})


userRouter.delete("/:uid", async (req, res) => {
    try {
        let paramId = req.params
        let deleteUser = await userModel.deleteOne({ userId: paramId.uid })

        res.send({ result: "success", message: `deleted user with the following ID: ${paramId.uid}`, payload: deleteUser })
    } catch (error) {
        console.error("error on the user delete", error)
    }
})

export default userRouter




// OLD USER ROUTER LOGIC
        // userRouter.post('/', async (req, res) => {
        //     try {
        //         let { name, email, userId } = req.body
        
        //         let information = [{ name, email, userId }]
        
        //         let result = await userModel.create(information)
        
        //         res.send({ result: "success", payload: result })
        //     } catch (error) {
        //         console.error('error on user post', error)
        //     }
        // })
        
        // userRouter.put("/:uid", async (req, res) => {
        //     try {
        //         let paramId = req.params
        //         const findDocument = await userModel.findOne({ userId: paramId.uid })
        
        //         if (findDocument === null) {
        //             return res.send("user's ID not found")
        //         }
        
        //         let newUserInfo = req.body
        //         let update = await findDocument.updateOne(newUserInfo)
        
        //         res.send({ result: "success on updating", payload: update })
        //     } catch (error) {
        //         console.error("error on the user put", error)
        //     }
        // })