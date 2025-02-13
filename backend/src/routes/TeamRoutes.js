const express = require('express')
const router = express.Router()

const teamController = require('../controllers/TeamController')

router.post('/addteam', teamController.addTeam)

router.get('/searchteam', teamController.searchTeam)

router.get('/allteam',teamController.allTeam)

router.put('/updateteam/:id', teamController.updateTeam)

router.delete('/deleteteam', teamController.deleteTeam)

router.get('/countteam', teamController.countTeam)


module.exports = router;