const router = require('express').Router();


router.get('/home',(req,res)=>{
    res.json("success");
})
module.exports = router;