require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, SERVER_EMAIL, SERVER_PASSWORD} = process.env
const app = express()
const nodemailer = require('nodemailer')


const authCtrl = require('./controllers/authController')
const drillCtrl = require('./controllers/drillController')
const myDrillCtrl = require('./controllers/myDrillsController')


app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database is running')
    app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))
}).catch(err => console.log(err))


//endpoints

//drills

app.get('/api/drills', drillCtrl.getAllDrills)
app.get('/api/singledrill/:drill_id', drillCtrl.getSingleDrill)


//auth
app.get('/api/user', authCtrl.getUser)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)

//mydrills
app.get('/api/myDrills', myDrillCtrl.getMyDrills)
app.post('/api/create', myDrillCtrl.createDrill)
app.post('/api/post', myDrillCtrl.postDrill)


//myscores
app.get('/api/scores', myDrillCtrl.getScores)
app.put('/api/edit/:drill_id', myDrillCtrl.editScore)
app.get('/api/stats/:mydrill_id', myDrillCtrl.getStats)

