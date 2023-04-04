import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.get("/", (req, res) => {
    res.send({hello:"world"})
})

app.listen(process.env["PORT"] , () => console.log("rodando!"))