const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const generateAccessAndRefreshToken = async (userId) => {
    try {
        console.log("userId:::::::", userId);
        
        const user = await Admin.findById(userId);
        console.log("user", user);
        
        const accessToken = user.generateAccessToken();  // Corrected method name
        const refreshToken = user.generateRefreshToken();  // Corrected method name
        console.log("refreshToken in generateAccessAndRefreshToken", refreshToken);
  
        user.refreshToken = refreshToken;
  
        await user.save({ validateBeforeSave: false });
  
        return { accessToken, refreshToken };
    } catch (error) {
        console.log("something went wrong while generating access and refresh Token", error);
    }
};

// Add Admin
const addAdmin = async (req, res) => {
    try {
        // const existedAdmin= await Admin.findOne(req.body.email)
        // console.log("existedAdmin",);
        
        const AdminData = req.body;
        // const salt = await bcrypt.genSalt(10);
        // AdminData.password = await bcrypt.hash(AdminData.password, salt); // Hash password
        const admin =await Admin.create(AdminData);
        // const saveAdmin=await admin.save();
        console.log("admin",admin);
        console.log("id",admin._id);
        
        // const { accessToken, refreshToken }=generateAccessAndRefreshToken(saveAdmin._id)
        // console.log("refreshToken",refreshToken);
        
        res.status(201).json({ success: true, message:"subadmin created successfully" });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find admin by email
      const admin = await Admin.findOne({ email });
      
      if (!admin) {
          return res.status(404).json({ success: false, message: "Admin not found" });
      }

      // Compare password with hashed password
      const isPasswordValid=await admin.isPasswordCorrect(password)
      console.log("isPasswordValid",isPasswordValid);
      
    //   const isMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
          return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      // Generate JWT token with the secret from environment variables
    //   const token = jwt.sign(
    //       { id: admin._id, email: admin.email },
    //       process.env.JWT_SECRET, // Ensure JWT_SECRET is loaded
    //       { expiresIn: "1h" }
    //   );
    generateAccessAndRefreshToken(admin._id)
    // console.log("refreshToken",refreshToken);
    // console.log("admin56",admin);
console.log("admin after genfun",admin);

      res.status(200).json({
          success: true,
          message: "Login successful",
          admin,
        //   admin: { id: admin._id, email: admin.email }
      });
  } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: "An error occurred", error: err.message });
  }
};



// Search Admin
const searchAdmin = async (req, res) => {
    const { id } = req.params; // Extract both term and id from query parameters
    console.log("Admin ID:", id);
    try {
        const admins = await Admin.findById(id);
        res.json(admins);
        console.log(admins);
    } catch (error) {
        console.error("Error searching admins:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};

// All Admin
const allAdmin = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        console.error("Error searching admins:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};

    const updateAdmin = async (req, res) => {
        const { id } = req.params;
        console.log("id",id);
        
        const { name, email,password } = req.body;
    
        try {
            const admin = await Admin.findById(id);
            if (!admin) {
                return res.status(404).json({ error: 'Admin not found' });
            }
    
            admin.name = name || admin.name;
            admin.email = email || admin.email;
            admin.password=password || admin.password
            await admin.save();
            res.json({ message: 'Admin updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error updating admin' });
        }
    };
    

const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        await Admin.findByIdAndDelete(id);
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete admin' });
    }
  };

// Count Admin
const countAdmin = async (req, res) => {
    try {
        const count = await Admin.countDocuments({});
        res.json({ count });
    } catch (err) {
        res.status(500).json({ error: "Error fetching admins count" });
    }
};



module.exports = {
    addAdmin,
    loginAdmin,
    searchAdmin,
    updateAdmin,
    deleteAdmin,
    allAdmin,
    countAdmin,
    generateAccessAndRefreshToken
};
