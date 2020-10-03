const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
    db.select().from('Status').then((data)=>{
      res.send(data);
    });
  });

  router.get('/activeStatusId',(req,res)=>{
    db.select().from('Status').where('StatusName','Active').then((data)=>{
      res.send(data[0]);  //only send a single element
    });
  });

  router.get('/inactiveStatusId',(req,res)=>{
    db.select().from('Status').where('StatusName','Inactive').then((data)=>{
      res.send(data[0]);  //only send a single element
    });
  });

  router.get('/:id',(req,res)=>{
    db.select().from('Status').where('idStatus',id).then((data)=>{
      res.send(data[0]);
    });
  });

  module.exports = router;