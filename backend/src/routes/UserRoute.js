const express = require("express");
const MembershipController=require('../controllers/UserController')

const Memberrouter = express.Router();

Memberrouter.post('/join', MembershipController.MembershipController);
Memberrouter.post('/message', MembershipController.MembershipControllerMessage);
Memberrouter.post('/hiremessage', MembershipController.MembershipControllerHireMessage);
Memberrouter.get('/allMember', MembershipController.allMember);
Memberrouter.delete('/deleteMember', MembershipController.deleteMember);
Memberrouter.get('/countMember', MembershipController.countMember);

module.exports = Memberrouter;