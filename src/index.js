const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const server = express();

mongoose.connect(
  'mongodb+srv://adailsonacj:rootadailsonacj@cluster0-ftlu8.mongodb.net/aircnc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
server.use(cors());
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

server.use(express.json());

server.use(routes);

server.listen(3333);
