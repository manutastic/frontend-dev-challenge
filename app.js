const express     = require('express'),
      bodyParser  = require('body-parser'),
      cors        = require('cors'),
      data        = require('./data');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/phones", (req, res, next) => {
    if (req.query.page && req.query.numPerPage) {
        res.json(data.slice(0, req.query.page * req.query.numPerPage));
    }else{
        res.json(data);
    }
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
