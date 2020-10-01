const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('ContactChannel').then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('ContactChannel').where('idContactChannel',req.params.id).then((data)=>{
    res.send(data);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).into('ContactChannel').then(data=>{
    res.send(data);
  });
});

module.exports = router;
