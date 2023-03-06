const Item=require("../models/item.js");

exports.addCartItems=(req,res,next) => {
    console.log(req.body)
    const item=new Item(null,req.body.title,req.body.text);
    console.log(item);
    item.save();
    
    res.redirect('/');
};
exports.getCartItems=(req,res,next) => {
    
   Item.fetchAll(items=>{
    res.render('todo',{its:items})
   })
}
exports.deleteCartItem=(req,res,next) => {
    console.log("idhar aya");
    console.log(req.body.deleteId);
    
    Item.deleteById(req.body.deleteId);
    res.redirect('/');
}