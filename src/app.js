const express = require("express");
const indexRoutes = require("./routes/indexRoutes");
const path = require("node:path");
const app = express();

//Serve Static Assets
const assetsPath = path.join(__dirname, "/public");
app.use(express.static(assetsPath));
//Set properties of express app
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use("/", indexRoutes);

const PORT = 3000;
app.listen(PORT, (error)=>{
    if(error){
        throw error;
    }
    console.log(`Server listening on port ${PORT}`)
});