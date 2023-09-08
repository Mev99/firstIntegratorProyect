import { Schema, model } from "mongoose";

const cartSchema = new Schema({

})

const cartModel = model('carts', cartSchema)

export default cartModel