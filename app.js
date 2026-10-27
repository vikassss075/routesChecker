const express = require('express');

let app = express();

let orders = [
    {
        order:1
    },
    {
        order:2
    }
];

let users = [
    {
        user:1
    },
    {
        user:2
    }
]

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("<h1>Welcome Page</h1>")
})

app.get("/orders",(req, res)=>{
    res.send("<h1>Here are all the orderes</h1>");
})

app.post("/orders", (req, res)=>{
    res.send("<h1>A new order created</h1>");
});
app.get("/users",(req, res)=>{
    res.send("<h1>Here are all the users</h1>");
})

app.post("/users", (req, res)=>{
    res.send("<h1>A new user has been added</h1>");
});

app.listen(3000, ()=>{
    console.log("server is running");
})