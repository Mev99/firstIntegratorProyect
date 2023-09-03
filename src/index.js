import Express from "express";
import mongoose from "mongoose";
import userRouter from "./router/users.router.js"
import productRouter from "./router/product.router.js";

const app = Express()
app.use(Express.json())

app.listen(8080, () => {
    console.log(`listening on what ever port you choose homie`)
})

mongoose.connect("mongodb+srv://Mev:1972@cluster0.kxayelo.mongodb.net/ecommerce?retryWrites=true&w=majority")
    .then(() => {
        console.log('connected to DB')
    })
    .catch(error => {
        console.error('error connecting to DB', error)
    })


app.use('/user', userRouter)
app.use('/product', productRouter)


// *separar las rutas en una carpeta router.

// GET - POST - PUT - DELETE

// *Conexion a DB con MongoDB Atlas

// *Utilizacion de Mongoose para el modelado de los datos.

// *Db -> e-commerce.

// 2 Colecciones: Users - Products (cada uno con su schema).

// *REPOSITORIO con Readme con capturas de Postman o

// *Capturas de Postman en el campo de la entrega.

// *USERS: Nombre - Email - Id(no repetible)

// PRODUCTS: Nombre - Categoria - Precio(N°) - Stock(N°) - Imagen