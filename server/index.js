// Section 1
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

let date = new Date()
date.setDate(date.getDate() - 1);
var year = date.getFullYear().toString()
var month = (date.getMonth() + 1)
var day = date.getDate()

// Logic for correct string format
if (month < 10) {
  month = "0" + month.toString()
}
if (day < 10) {
  day = "0" + day.toString()
}


// yzdhakncdcuws8h8dh2zzugt  (old key)
// 8vnnjsexxxzcbb7727z8vudm  (key available for use)
let scheduleCall = "http://api.sportradar.us/nba/trial/v7/en/games/" + year + "/" + month + "/" + day + "/schedule.json?api_key=s5wd6uu6wpwmgwk4qwc59u3k"



// Section 2
const db = require('./db')
const userRouter = require('./routes/user-router')
const profitRouter = require('./routes/profit-router')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', userRouter)
app.use('/api', profitRouter)
// Section 3
app.get('/', (req, res) => {
 res.send("<h1>Home page</h1>");
});

// getting the date for scores of each game
const axios = require('axios')
app.get('/schedule', (req, res) => {
  axios.get(scheduleCall)
  .then(response => {
    res.send(response.data)
  })
})

app.get('/odds', (req, res) => {
  //https://api.the-odds-api.com/v3/odds/?apiKey=e111625f7e5535163676b2e1d0325758&sport=basketball_nba&region=us&mkt=totals
  axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=4189a38ec36dcd6f5df99d8055122657&sport=basketball_nba&region=us&mkt=totals")
  .then(response => {
    res.send(response.data)
  })
})



// Section 4
app.listen(3000, () => {
 console.log('server started on port 3000');
});
