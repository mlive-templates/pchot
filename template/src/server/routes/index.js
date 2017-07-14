/**
 * create time: 2017-07-14
 * fn: 路由入口文件，所有路由在这里加载
 */
const express = require('express')
const router = express.Router()

const viewRouter = require('./view')
const viewErrorPageRouter = require('./errorPage')
const admin = require('./admin')

router.use('/', viewRouter)
router.use('/admin', admin)
router.use('*', viewErrorPageRouter)

module.exports = router