const express = require("express");
const MembershipController=require('../controllers/UserController')

const Memberrouter = express.Router();

Memberrouter.post('/join', MembershipController.MembershipController);
Memberrouter.get('/allMember', MembershipController.allMember);
Memberrouter.delete('/deleteMember', MembershipController.deleteMember);

module.exports = Memberrouter;