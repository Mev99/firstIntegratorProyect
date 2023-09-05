import { Schema, model } from "mongoose";

const productSchema = new Schema({
    product: String,
    category: String,
    price: Number,
    stock: Number,
    image: Schema.Types.String
})

const productModel = model('product', productSchema)

export default productModel