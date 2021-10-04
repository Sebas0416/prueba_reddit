const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/themes", controller.getThemes)
router.get("/themes/:id", controller.getThemeById)

module.exports = router