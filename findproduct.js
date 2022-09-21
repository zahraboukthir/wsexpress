const product = require('./products')
const productfilter = (req, res, next) => {
    const { id } = req.params
    console.log(req.params)
    const prod = product.find((el) => el.id == id)

    if (prod) {
        req.prod = prod
        return next()

    } else {
        return res.status(404).send("There is not product with this id ...")
    }
}



module.exports = productfilter;