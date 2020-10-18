import express, { Application } from 'express'
import dotenv from 'dotenv'
import { routerV1 } from './routes/v1/parse'
import { routerV2 } from './routes/v2/parse'

// Load Config
dotenv.config({ path: './config/config.env' })

const app: Application = express()

// Body Parser
app.use(express.json())

// Routes
// V1
app.use('/api/v1', routerV1)
// V2
app.use('/api/v2', routerV2)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("App started on port ", PORT)
})
