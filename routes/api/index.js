const express = require('express');
const router = express.Router();
const statusRoute = require('./status');
const channeltypeRoute = require('./channeltype');
const channelRoute = require('./channel');
const extsourceRoute = require('./extsource');
//const topicRoute = require('./topic');
const contactChannelRoute = require('./contactchannel');
const db = require('../../database');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

//init global.activeStatusId 
if(!global.activeStatusId){
  fetch(`${process.env.BASE_URL}/api/status/activeStatusId`)
    .then(res=>res.json())
    .then(json=>global.activeStatusId=json.idStatus);
}
//init global.inactiveStatusId 
if(!global.inactiveStatusId){
  fetch(`${process.env.BASE_URL}/api/status/inactiveStatusId`)
    .then(res=>res.json())
    .then(json=>global.inactiveStatusId=json.idStatus);
}

router.use('/status', statusRoute);
router.use('/channel', channelRoute);
router.use('/channeltype', channeltypeRoute);
router.use('/extsource', extsourceRoute);
//router.use('/topic', topicRoute);
router.use('/contactchannel', contactChannelRoute);
/*
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

*/

module.exports = router;
