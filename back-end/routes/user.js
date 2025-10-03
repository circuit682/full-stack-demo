import express from "express";
const router = express.Router();

router.get("/current-user", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json(null);
  }
});

export default router;
