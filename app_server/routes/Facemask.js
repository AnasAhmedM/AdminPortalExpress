const express = require('express');
const router = express.Router();
const FacemaskController = require("../controllers/Facemask")

router.get('/', FacemaskController.All)
router.get('/noMask', FacemaskController.PeopleWithoutMask)
router.delete('/delete/:id', FacemaskController.DeleteOne)


module.exports = router