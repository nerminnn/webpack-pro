    // Configure the environment variables
var path = require('path')
const express = require('express')    
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

    //Configure express to use body-parser as middle-ware.
var bodyParser = require('body-parser')
    //Configure cors to avoid cors-origin issue
var cors = require('cors')

const app = express()
app.use(cors())
    // to use json
app.use(bodyParser.json())
    // to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

    //Configure express static directory.
app.use(express.static('dist')) 
const PORT = 8081

    //Configuration to be able to use env variables
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const MEAN_CLOUD_API_KEY = process.env.API_KEY;

app.get('/', function (req, res) {
    
    res.sendFile(path.resolve('src/client/views/index.html'))
})
    //route is handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        const url      = req.body.url
        const apiURL   = `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${url}&lang=en`

        const fetchRes = await fetch(apiURL);
        const jason = await fetchRes.json()
        
        res.send(jason)  
       console.log(jason)
        
        res.status(200).send();
        
    } catch (error) {
        console.log(error.message)
    }
})

    // where app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

    //export app to use it in the unit testing
module.exports ={
    app:app
}

