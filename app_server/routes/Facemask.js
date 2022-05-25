const express = require('express');
const router = express.Router();
const FacemaskController = require("../controllers/Facemask")

router.get('/', FacemaskController.All)
router.delete('/delete/:id', FacemaskController.DeleteOne)


module.exports = router