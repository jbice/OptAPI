const express = require('express');
const router = express.Router();
const channelRoute = require('./channel');
//const topicRoute = require('./topic');
const contactChannelRoute = require('./contactchannel');
const db = require('../../database');

router.use('/channel', channelRoute);
//router.use('/topic', topicRoute);
router.use('/contactchannel', contactChannelRoute);

// load some test data
router.get('/initialize',(req,res)=>{

  db.select().from('Status').then((data)=>{
    console.log(data);
    if(data.length == 0) {
      loadData();
    }
  }).then(()=>{
    res.status(200).send();
  }).catch((err)=>{
    res.status(500).send(err);
  });
});

function loadData() {
  console.log('in loadData function.');

  // insert Status
  db.insert([{
    StatusName: 'Active'
    },{
    StatusName: 'Inactive'
  }]).into('Status').catch(err=>{
    console.log(err);
  });

  // insert Channel
  db.insert([{
    ChannelName: 'Email',
    StatusId: 1
  },{
    ChannelName: 'SMS',
    StatusId: 1
  }]).into('Channel').catch(err=>{
    console.log(err);
  });

}



module.exports = router;
