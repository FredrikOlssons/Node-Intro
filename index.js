import express from "express";

const app = express()
const port = 3000

app.use("/", express.static("client"))
let name = ''

//Klassisk GET-anrop
app.get("/api/test", (req, res) => {
    console.log('tessssttt')
    res.send(req.query.valueOne)
})





app.get("/api/name/:name", (req, res) => {
    name = req.params.name
    res.json('Sparat')
    console.log(name)
})

//Dynamisk GET via Express
app.get("/api/:greeting", (req, res) => {
    req.params.greeting
    res.send(`${req.params.greeting + " " + name}`)
    
})

app.listen(port, name, () => {
    console.log(`App is running on port ${port}`);
    console.log(name)
})