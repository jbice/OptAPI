const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('OptType').where('idStatus',global.activeStatusId).then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('OptType').where({
    idStatus: global.activeStatusId,
    idOptType: req.params.id
  }).then((data)=>{
    res.send(data[0]);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).returning('idOptType').into('OptType').then(data=>{
    res.send(data);
  });
});

router.delete('/:id',(req,res)=>{
/*
 * Soft delete
 */
 db('OptType').where('idOptType', req.params.id).update({
   idStatus: global.inactiveStatusId //inactive status
 }).then(data=>{
   console.log(data);
   if(!data){
     res.status(404);
   }
   res.send();
 });

});

module.exports = router;
