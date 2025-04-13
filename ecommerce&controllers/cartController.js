const getCartByUserID = (req, res) => {
    const { userId } = req.params;
    res.send(`Fetching cart for user with ID: ${userId}`);
};

const addProductToCart = (req, res) => {
    const { userId, productId } = req.params;
    res.send(`Adding product with ID: ${productId} to cart for user with ID: ${userId}`);
};

const editCart = (req, res) => {
    res.send("Put request called for editing cart");
};

const deleteCart = (req, res) => {
    res.send("Delete request called for user cart");
};

module.exports = {
    getCartByUserID,
    addProductToCart,
    editCart,
    deleteCart
};
