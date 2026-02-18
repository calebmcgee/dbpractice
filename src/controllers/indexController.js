const indexController = {
    getIndex : (req, res) => {
        console.log("usernames will be logged here - wip");
        res.render("index", {title : "Home"});
    },
    getNew : (req, res) =>{
        res.render("newUserForm", {title : "Create new user"});
    },
    postNew : (req, res) => {
        //will save the incoming username data to the DB. For now, just log
        console.log("username to be saved: ", req.body.username)
        res.redirect("/");
    }
}

module.exports = indexController;

