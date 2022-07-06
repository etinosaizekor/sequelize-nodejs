const express = require('express')
const bodyParser = require('body-parser')
const {sequelize, Record} = require('./models');
const records = require('./models/records');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/:id', async (req, res)=>{
    const record_id = req.params.id
    const record = await Record.findAll({where: {id: record_id}})
    console.log(record)
    res.send(JSON.stringify(record, null, 2))
})

app.post('/', (req, res)=> {
    const {company_name, email, CEO} = req.body
    console.log(company_name, email, CEO)
    try{
        const newRecord = Record.create({company_name: company_name, official_email: email, CEO:CEO})
    } catch(err){
        console.log(err)
    }
})

app.listen(3000, (err) =>{
    if(err){
        console.log(err)
    }
    console.log("Server is running on port 3000");
    sequelize.sync({alter: true});
})
