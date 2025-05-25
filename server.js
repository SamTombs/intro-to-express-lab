const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
  res.send('<h1>Lab Home!</h1>');
});

// 1st Question

app.get("/greetings/:username", (req, res) => {
    const name = req.params.username
    res.send(`<h1>Hello there ${name}, what a delight to see you once more. </h1>`);
});

// 2nd Question

app.get("/roll/:number" , (req, res) => {
    // had to define max, by using parseInt to convert number to a number
    const max = parseInt(req.params.number);
    //had to make sure it is a number and that number is equal or greater than 0
    if  (req.params.number >= 0 && !isNaN(max)) {
        //randomizes the number given back
        const randomRoll = Math.floor(Math.random() * max) + 1;
        res.send(`You rolled ${randomRoll}`);
    } else {
        //anything not a number will return this
        res.send("You must specify a number");
    }
});

// 3rd question

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get("/collectibles/:index", (req, res) => {
    const choice = req.params.index;
    // created item variable that will take the number put into index and will find the specfic array
    const item = collectibles[choice];
    //to find the correct part of the object
    res.send(`You want the ${item.name}, it can be yours for ${item.price}`);
});

// 4th Question

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get("/shoes/:index", (req, res) => {
    const shoe = req.params.index;
    const minPrice = shoes.filter((price) => {
        if (shoes.price > 50) {
            req.send(shoe);
    } else {
        return ;
    }
    })
});