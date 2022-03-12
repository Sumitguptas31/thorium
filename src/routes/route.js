const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/stateid",CowinController.findstateid)
router.get("/getsortedcities",CowinController.getSortedCities)
router.post("/memes",CowinController.getmemes)

// WRITE A GET API TO GET /stateid/:idTHE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;