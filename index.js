const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.get('/*', (req, res) => res.send('αlpha'))
app.listen(8080, () => console.log('server started and listening...'))
