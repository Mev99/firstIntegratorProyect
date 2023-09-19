import axios from "/axios"

axios.get("/products")
.then(() => {
    console.log("test")

}).catch((err) => {
    console.log("error: ", err)
})