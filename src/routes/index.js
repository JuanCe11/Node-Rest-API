const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send({ title: "Hello mundo" });
});

module.exports = router;
