const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("views"));

const emailDB = "ahsfaqmuhammedcv@gmai.com"
const passwordDB = 123;

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === emailDB && password === passwordDB) {
        res.send("Login Successfull")
    } else {
        res.send("Login Failed")
    }
});

app.listen(3001, () => console.log("Server is running"));