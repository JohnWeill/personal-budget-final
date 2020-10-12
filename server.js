// budget API
const express = require('express');
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