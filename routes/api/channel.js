const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('Channel').where('idStatus',global.activeStatusId).then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('Channel').where({
    idStatus: global.activeStatusId,
    idChannel: req.params.id
  }).then((data)=>{
    res.send(data[0]);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).returning('idChannel').into('Channel').then(data=>{
    res.send(data);
  });
});

router.delete('/:id',(req,res)=>{
/*
 * Soft delete
 */
 db('Channel').where('idChannel', req.params.id).update({
   idStatus: global.inactiveStatusId //inactive status
 }).then(data=>{
   console.log(data);
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
