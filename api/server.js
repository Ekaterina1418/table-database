import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as UserController from './controllers/UserController.js'

const app = express()
app.use(cors())
app.use(express.json())

const URL = 'mongodb+srv://eolejnik:Eg_180587@cluster0.3xw5xo3.mongodb.net/'
const port = 3000

app.post('/users', UserController.add)
app.get('/users', UserController.getAll)
app.delete('/users/:id', UserController.remove)
app.put('/users/:id', UserController.update)

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Сервер запущен на порту ${port}`)
})

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))
