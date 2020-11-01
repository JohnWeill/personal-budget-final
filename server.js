// budget API
const express = require('express');
const 
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    },
    {
        title: 'Games',
        budget: 50
    },
    {
        title: 'Gas',
        budget: 10
    },
    {
        title: 'Power',
        budget: 15
    },
    {
        title: 'Netflix',
        budget: 9
    },

]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

let url = 'mongodb://localhost:3000/budget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the database")
    // list all entries
   nameModel.find({})
   .then((data)=>{
       console.log(data)
    })
    .catch((connectionError) =>{
       console.log(connectionError)
    })
})
.catch((connectionError) => {
   console.log(connectionError)
})
fetch
nameModel.find({id: 2})
    .then((data)=>{
        console.log(data)
    })
    .catch((connectionError) =>{
        console.log(connectionError)
    })
    nameModel.findById("5f9c9e28b035ae579b25e88a")
    .then((data)=>{
        console.log(data)
        mongoose.connection.close()
    })
    .catch((connectionError) =>{
        console.log(connectionError)
    })
    let newData = new namesModel({id: 10, name: "Testing mongoose"});
    namesModel.insertMany(newData)
    .then((data)=>{
        console.log(data)
        mongoose.connection.close()
    })
    .catch((connectionError) =>{
        console.log(connectionError)
    })
    let newData = {id: 11, name: "updated content"};
    namesModel.update({id: 10}, newData)
    .then((data)=>{
        console.log(data)
        mongoose.connection.close()
    })
    .catch((connectionError) =>{
        console.log(connectionError)
    })
    namesModel.remove({id: 10})
    .then((data)=>{
        console.log(data)
        mongoose.connection.close()
    })
    .catch((connectionError) =>{
        console.log(connectionError)
    })