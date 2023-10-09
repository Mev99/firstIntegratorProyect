import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const stockSchema = new Schema({
        stock_available: Boolean,
        stock_ammount: Number
}, {_id: false})

const productSchema = new Schema({
    product: String,
    category: String,
    price: Number,
    stock: stockSchema,
    image: [Schema.Types.String]
})
productSchema.plugin(paginate)
const productModel = model('product', productSchema)

export default productModel
