const path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// app.use(cors(corsOptions));
app.use(cors())

const routes = require('./routes/apiRoutes')
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
const PORT = process.env.PORT || 3001

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Make public a static folder
app.use(express.static('public'))
app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

//connect to mongoDB
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
