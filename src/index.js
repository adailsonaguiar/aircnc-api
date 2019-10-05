const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
  'mongodb+srv://adailsonacj:rootadailsonacj@cluster0-ftlu8.mongodb.net/aircnc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json());

server.use(routes);

server.listen(3000);
