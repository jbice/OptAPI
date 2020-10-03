const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('ChannelType').where('idStatus',global.activeStatusId).then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('ChannelType').where({
    idStatus: global.activeStatusId,
    idChannelType: req.params.id
  }).then((data)=>{
    res.send(data[0]);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).returning('idChannelType').into('ChannelType').then(data=>{
    res.send(data);
  });
});

router.delete('/:id',(req,res)=>{
 db('ChannelType').where('idChannelType', req.params.id).update({
   idStatus: global.inactiveStatusId //deleted status
 }).then(data=>{
   if(data!=true){
     res.status(404);
   }
   res.send();
 });
/*
 * Hard delete
  db('Channel').where('idChannel', req.params.id).del().then(data=>{
    if(data!=true)
      res.status(404);
    res.send();
  });
*/

});


module.exports = router;
