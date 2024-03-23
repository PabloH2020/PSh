const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const uuid = require('uuid')
require("dotenv").config()
const {GameStatsModel} = require('./stats/stats')
const {statsFactory} = require('./functions/helpers')
const cron = require('node-cron');
require('./config/database')



const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})


//cron new stats creation every five minutes
cron.schedule('*/5 * * * *', async() => {
  const createdValues = await statsFactory()
  console.log(createdValues)
  GameStatsModel.create({values:createdValues})
});



app.get('/gameData', async (req, res) => {
  
  res.header("Access-Control-Allow-Origin", "*");
  try {
     const results = await GameStatsModel.getAll()
    
    
    
    res.status(200).json({message:'Game stats retrieved',stats:results})

  } catch (error) {

    res.status(500).json({message:error.message})
  }
})

const port = process.env.PORT || 27017
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
