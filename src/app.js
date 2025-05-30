const express = require("express")
const connectDB = require("./config/database")
const User = require("./models/user")

const app = express()
app.use(express.json());    //middleware(to convert data)

app.post("/signup", async (req, res) => {
    console.log(req.body);
    
    const user = new User(req.body)
    try {
        await user.save();
        res.send("User added successfullt!!")
    } catch (error) {
        res.status(400).send("Error", error.message)
    }
})

connectDB()
    .then(() => {
        console.log("Database connection established...");

        app.listen(5555, () => {
            console.log("Server Listening on port 5555");
        })
    })
    .catch((error) => {
        console.log("Database connot be connected!!");
    })