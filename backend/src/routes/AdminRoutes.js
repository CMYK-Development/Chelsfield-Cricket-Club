const express = require('express')
const router = express.Router()

const adminController = require('../controllers/AdminController')

router.post('/addadmin', adminController.addAdmin)

router.get('/searchadmin/:id', adminController.searchAdmin)

router.get('/alladmin',adminController.allAdmin)

router.put('/updateadmin/:id', adminController.updateAdmin)

router.delete('/deleteadmin/:id', adminController.deleteAdmin)

router.get('/countadmin', adminController.countAdmin)

router.post('/loginadmin', adminController.loginAdmin)



module.exports = router;