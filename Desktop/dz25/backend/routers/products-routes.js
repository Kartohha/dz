const express = require('express')
const {
      getProducts,
      addproduct
    } = require('../controller/products-controller')

// поскольку само приложение app определено в файле сервера, правильно будет создать внутри файла роутов своё мини приложение, которое будет работать с запросами
const router = express.Router()

router.get('/products', getProducts)
router.post('/users/', addproduct)

module.exports = router