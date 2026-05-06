import express from 'express'
import router from './routes.js'

const app = express()
const PORT = 8000
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listen on: ${PORT}`)
})