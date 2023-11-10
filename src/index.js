const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebar = require('express-handlebars')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.engine('hbs', handlebar.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', function (req, res) {
  res.render('new')
})

app.listen(port)

console.log(port)