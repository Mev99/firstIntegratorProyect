import axios from "https://cdn.jsdelivr.net/npm/axios@1.5.0/+esm"

const options = {
    method: 'GET',
    url: 'http://localhost:8080/products',
}
try {
    const response = await axios.request(options)
    console.log(response.data)
} catch (error) {
    console.log(error)
}