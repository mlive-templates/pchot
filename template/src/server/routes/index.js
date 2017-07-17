/**
 * create time: 2017-07-14
 * fn: 路由入口文件，所有路由在这里加载
 */
const express = require('express')
const router = express.Router()

const viewRouter = require('./view')
const apiRouter = require('./api')

router.use('/', viewRouter)
router.use('/api', apiRouter)
router.use('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router