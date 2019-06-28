const express     = require('express'),
      bodyParser  = require('body-parser');

const app = express();
const port = 4000;

// Mock data, not from database obviously
const data = [
        {
            "name": "iPhone XS",
            "brand": "Apple",
            "color": "Space Grey",
            "price-usd": 999,
            "image-url": "https://images-na.ssl-images-amazon.com/images/I/51zb1MhP2aL._SX569_.jpg"
        },
        {
            "name": "Galaxy S10",
            "brand": "Samsung",
            "color": "Prism Black",
            "price-usd": 899.99,
            "image-url": "https://images-na.ssl-images-amazon.com/images/I/61O%2Bh99cFEL._SX569_.jpg"
        },
        {
            "name": "Pixel 3",
            "brand": "Google",
            "color": "Just Black",
            "price-usd": 799,
            "image-url": "https://images-na.ssl-images-amazon.com/images/I/61jEXWFEGOL._SX569_.jpg"
        }
    ];

app.get("/phones", (req, res, next) => {
    res.json(data);
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
