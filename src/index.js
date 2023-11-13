const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebar = require('express-handlebars')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use (express.urlencoded({extended: true}))
app.use (express.json())

app.engine('hbs', handlebar.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', function (req, res) {
  res.render('new')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})

app.listen(port)

console.log(port)