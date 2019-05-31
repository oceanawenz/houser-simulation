require("dotenv").config();
const express = require('express');
const massive = require("massive");
const controller = require('./controller');
const PORT = 4000;

const app = express()

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.use(express.json());


app.get('/api/houses', controller.getHouses);
app.post('/api/house', controller.postHouse);
app.put("/api/house/:id", controller.updateHouse);
app.delete('/api/house/:id', controller.deleteHouse);

app.listen(PORT, () => console.log(`listening on port${PORT}`));