const express = require("express")

const app = express()

app.use("/test", (req, res) => {
    res.send("Hello from 3322")
})

app.listen(3000, () => {
    console.log("Server is running on 3000");
    
})