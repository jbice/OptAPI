const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('ExtSource').then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('ExtSource').where({
    idExtSource: req.params.id
  }).then((data)=>{
    if(!data.idExtSource){
      res.status(404);
      res.send();
    }
    res.send(data[0]);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).returning('idExtSource').into('ExtSource').then(data=>{
    res.send(data);
  });
});

router.delete('/:id',(req,res)=>{
  res.status(405); //method not allowed for now.
  res.send();
});


module.exports = router;
