const express = require('express');
const router = express.Router();
const statusRoute = require('./status');
const channeltypeRoute = require('./channeltype');
const channelRoute = require('./channel');
const extsourceRoute = require('./extsource');
const opttypeRoute = require('./opttype');
const preferenceRoute = require('./preference');
const topicRoute = require('./topic');
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
router.use('/opttype', opttypeRoute);
router.use('/preference', preferenceRoute);
router.use('/topic', topicRoute);
router.use('/contactchannel', contactChannelRoute);

module.exports = router;
