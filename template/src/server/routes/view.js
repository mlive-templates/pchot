/**
 * create time: 2017-07-14
 * fn: 模板路由文件，可能会有多页面，统一在这里进行路由注册
 */
const express = require('express')
const router = express.Router()
const template = require('../template')
const config = require('./view/config')

config.forEach((item, index) => {
    router.get(item.path, (req, res) => {
        res.send(template.render(item.view))
    })
})

module.exports = router