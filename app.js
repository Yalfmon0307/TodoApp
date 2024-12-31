import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './server/config/serverdb.js';
import { router } from './server/routers/routers.js';
dotenv.config();
connectdb()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});




const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`servidor levantado en http://localhost:${port}`);
})