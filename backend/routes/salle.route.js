const express = require('express');
const router = express.Router();
const controller = require("../controllers/salle.controller");


router.all("/",(req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
router.get("/", (req, res, next) => {console.log("coucou");next()},controller.getAll);
router.post("/",controller.addOne);
router.delete("/",controller.deleteAll);

router.get("/:id",controller.getOne)
router.put("/:id",controller.updateOne);
router.delete("/:id",controller.deleteOne);

module.exports = router;



