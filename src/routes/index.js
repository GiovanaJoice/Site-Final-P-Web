const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const resultados = require('../controllers/resultados')
const ajuda = require('../controllers/ajuda')
const cadastro = require('../controllers/cadastro')
const categorias = require('../controllers/categorias')
const favoritos = require('../controllers/favoritos')
const ingredientes = require('../controllers/ingredientes')
const login = require('../controllers/login')
const receita = require('../controllers/receita')


router.get('/', home.home)
router.get('/resultados', resultados.resultados)
router.get('/ajuda', ajuda.ajuda)
router.get('/cadastro', cadastro.cadastro)
router.get('/categorias', categorias.categorias)
router.get('/favoritos', favoritos.favoritos)
router.get('/ingredientes', ingredientes.ingredientes)
router.get('/login', login.login)
router.get('/receita', receita.receita)



module.exports = router 