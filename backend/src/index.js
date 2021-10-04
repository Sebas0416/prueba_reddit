const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/route')
const cors = require('cors')


const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
app.use(cors())

app.use('/api', routes)

app.listen(app.get('port'), () =>{
    console.log('Server on running on port ' + app.get('port'))
})