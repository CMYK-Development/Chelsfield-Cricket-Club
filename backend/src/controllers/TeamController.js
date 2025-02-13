const Team = require ("../models/Teams")

const addTeam = async (req, res) => {
    try{
        const TeamData = req.body;
        const team = new Team(TeamData);
        await team.save();
        res.status(201).json({success: true, team});
    } catch(err){
        res.status(500).json({success: false, err});
    } 
}



const searchTeam = async (req, res) => {
    const searchTerm = req.query.term;
    console.log(searchTerm);
    try {
      const regex = new RegExp(searchTerm, 'i');
      const teams = await Team.find({ name: regex });
      res.json(teams);
      console.log(teams);
    } catch (error) {
      console.error('Error searching teams:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
}

const allTeam = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.error('Error searching teams:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

const updateTeam = async (req, res) => {
  const { id } = req.params; // Get the company ID from URL parameters
  const { name, email, phone } = req.body; // Get updated fields from request body

  console.log("Received ID:", id);
  console.log("Received update data:", { name, email, phone });

  try {
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      {name, email, phone},
      { new: true }
    );

    if (!updatedTeam) {
      console.log("Team not found with ID:", id);
      return res.status(404).json({ error: 'Team not found' });
    }

    console.log("Team updated successfully:", updatedTeam);
    return res.json(updatedTeam);
  } catch (error) {
    console.error('Error updating team:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};



const deleteTeam = async (req, res) => {
  try {
      const { ids } = req.body; // expecting an array of team IDs
      await Team.deleteMany({ _id: { $in: ids } }); // Use $in to match multiple IDs
      res.status(200).json({ message: 'Teams deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to delete teams' });
  }
};


const countTeam = async (req, res) => {
  try {
    const count = await Team.countDocuments({});
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error fetching teams count" });
  }
};


module.exports = {
    addTeam,
    searchTeam,
    updateTeam,
    deleteTeam,
    allTeam,
    countTeam
}