import express from 'express'
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

import authRouter from './routes/Auth.js'

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://divyakalyan245:g0sCRgWxJNhGEqSB@cluster0.ozbkcov.mongodb.net/vahann-value')
        console.log('Connection Sucessful')
    }
    catch(err){
        console.log(err.message)
    }
}

connectDB()

const PORT = process.env.PORT || 5500

const app = express()

app.use(cookieParser())

app.use(express.static('./public'))


app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(
    cors({
        origin: 'https://vahann-value.vercel.app',
        methods: ['POST', 'GET'],
        credentials: true
    })
)
app.use(authRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})