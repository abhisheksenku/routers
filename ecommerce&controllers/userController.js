const getUsers = (req,res)=>{
    res.send("Fetching all users");
}
const getUsersByID = (req,res)=>{
    const{id} = req.params;
    res.send(`Fetching user with id:${id}`);
}
const postUsers = (req,res)=>{
    res.send("New user is added");
}
const editUsers = (req,res)=>{
    res.send("Put request called");
}

const deleteUsers = (req,res)=>{
    res.send("Delete request called");
}
module.exports = {
    getUsers,
    getUsersByID,
    postUsers,
    editUsers,
    deleteUsers
}