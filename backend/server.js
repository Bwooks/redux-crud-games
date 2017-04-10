const express = require('express');
const app = express();
const mongodb = require('mongodb');
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl,(err,database)=>{

    app.get('/api/games',(req,res)=>{
        database.collection('games').find({}).toArray((err,games)=>{
            res.json({games});
        })
    });

    app.listen(8080,()=>console.log("Listening on port 8080"));
});
