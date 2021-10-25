const express = require('express');
const cors = require('cors')
const app= express();
app.use(cors())

app.use(express.json()); 
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello from node dfs asdfasdf dsfsd')
})

const users = [
    {id:0, name:"sajol", email: "sajolbhadra@gmail.com", phone: '01700000000'},
    {id:1, name:"kajol", email: "kajolpori33a@gmail.com" , phone: '01733000000'},
    {id:2, name:"saju", email: "sajol013a@gmail.com" , phone: '01701100000'},
    {id:3, name:"kaju", email: "kazolidas@gmail.com",  phone: '01708800000'},
    {id:4, name:"koushani", email: "koushani@gmail.com" ,  phone: '01709900000'},
]

app.get('/users', (req, res) => {
    const sr = req.query.search;
    if(sr){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(sr));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})
//-----------------app.METHOD-----------
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
//-----------dynamic api--------------
app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen (port, ()=> {
    console.log('Listening to port', port)
})