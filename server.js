// API with express
// Twitch Streamers API
// 
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors()) //to handle local request for set up server i.e. heroku
const rappers = {
'21 savage':{
    'age': 29,
    'birthName': 'savage',
    'birthLocation': 'London'
},
'lirik':{
    'age': 29,
    'birthName':'Bennet',
    'birthLocation': 'Chicago'
},
'unknown':{
    'age':0,
    'birthName': 'unknown',
    "birthLocation": 'unknown'
}
}
app.get('/', (request, response)=>{ // callback function
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase() // get 'name' from url
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Catch it`)
})
