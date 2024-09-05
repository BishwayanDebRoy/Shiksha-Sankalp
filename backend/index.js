const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000
//const dotenv = require("dotenv");

require('dotenv/config')
//dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors({

    origin: ["https://shiksha-sankalp-webapp.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}
));



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cfg'
})
    .then(() => console.log('Database connection established.'))
    .catch(err => console.error(err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})