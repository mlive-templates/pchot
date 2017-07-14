/**
 * create time: 2017-07-14
 * fn: admin 路由配置
 */
const express = require('express')
const router = express.Router()
const Admin = require('../controller/admin')

router.post('/login', Admin.login)
router.get('/logout', Admin.logout)
module.exports = router