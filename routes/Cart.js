const path=require('path');
const express = require('express');
const itemController=require('../controllers/items');
const router=express.Router();

router.get('/',itemController.getCartItems);
router.post('/add-task',itemController.addCartItems);

router.post('/delete-item',itemController.deleteCartItem);
module.exports=router;