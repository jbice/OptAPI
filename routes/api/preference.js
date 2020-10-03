const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',(req,res)=>{
  db.select().from('Preference').then((data)=>{
    res.send(data);
  });
});

router.get('/:id',(req,res)=>{
  db.select().from('Preference').where({
    idPreference: req.params.id
  }).then((data)=>{
    res.send(data[0]);
  });
});

//get preferences for a specific customer
router.get('/contact/:id',(req,res)=>{
  db.select().from('Preference').where({
    idContact: req.params.id
  }).then((data)=>{
    res.send(data[0]);
  });
});

router.post('/',(req,res)=>{
  db.insert(req.body).returning('idPreference').into('Preference').then(data=>{
    res.send(data);
  });
});

router.delete('/:id',(req,res)=>{
/*
 * Hard delete
 */
  db('Preference').where('idPreference', req.params.id).del().then(data=>{
    if(data!=true)
      res.status(404);
    res.send();
  });


});


module.exports = router;
