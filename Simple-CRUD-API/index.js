const express = require('express')
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('CRUD API Server');
  });


  

// Connect to the Database
mongoose
.connect('mongodb+srv://xenygma:NxF8tKR5cbGK3Ok8@backenddb.y2mh69f.mongodb.net/CRUD_API?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to Database successfully');
  
  app.listen(3000, () => {
    console.log('Server is up and running on port: 3000')
  });
})

.catch((err) => {
  console.log('Connection Failed.');
});


// Display the API in the browser
