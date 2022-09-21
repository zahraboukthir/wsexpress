const express = require('express')
const product = require("./products")
const router = express.Router()
router.get("/filter", (req, res) => {
    const { prix } = req.query
    console.log(product)
if (req.query=={}) {
    return res.send({product})
} else {
    const pfilter=product.filter((el)=>el.price >= prix)
    // console.log(typeof(prix))

    console.log(pfilter)
    
    return res.send(pfilter)
    
}
})
module.exports = router