const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send(`<button title="Hello, World!"> Hello, World!</button>`);
})



app.listen(port, () => {
    console.log(`App is running on ${port}...`)
})