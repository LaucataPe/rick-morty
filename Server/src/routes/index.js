//Express
const express = require('express')
const router = express.Router()

//Controllers
const {getCharById} = require('../controllers/getCharById')
const { postFav, deleteFav, clearFav} = require('../controllers/handleFavorites')
const { login } = require('../controllers/login')

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
router.delete('/clear', clearFav)

module.exports = {router}

