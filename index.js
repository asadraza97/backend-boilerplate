import express from 'express'
import helmet from 'helmet'
import routes from "./src/routes/index.js"
import mongoose from 'mongoose'
import {ENV} from './src/constant/index.js'

const port = 3000
const app = express();

app.use(helmet());
app.use(express.json());

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@cluster0.9jgru.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);


mongoose.connection.on("open", ()=>{
  console.log("db connected");
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api", routes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// helmet Security ky lye use krte hein is sy ye pata chalta ky website kis mai banai h(e.g: Express)