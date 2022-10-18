import express from 'express'
import axios from 'axios'
import cors from 'cors'
import 'dotenv/config';



const app = express()

app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    res.send("Rota de GET")
})

app.listen(process.env.PORT, () => console.log("Servidor iniciado!"))