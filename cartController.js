const getCartByID = (req,res)=>{
    const{id} = req.params;
    res.send(`Fetching cart with id:${id}`);
}
const postCart = (req,res)=>{
    res.send("New product is added in the cart");
}
const editCart = (req,res)=>{
    res.send("Put request called");
}

const deleteCart = (req,res)=>{
    res.send("Delete request called");
}
module.exports = {
    getCartByID,
    postCart,
    editCart,
    deleteCart
}