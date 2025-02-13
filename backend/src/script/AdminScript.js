const Admin = require("../models/Admin");

const superAdmin = [
  {
    name: "Mr. Asjad Mir",
    email: "asjad@chelsfieldcc.co.uk",
    password: "!#Asjad@123",
    role: "admin",
  },
  {
    name: "Mr. Yasir Tariq",
    email: "yasirtariq123@gmail.com",
    password: "!#Yasir@123",
    role: "admin",
  },
  {
    name: "Mr. Rao Fahad",
    email: "RaoFahad83@gmail.com",
    password: "!#Fahad@123",
    role: "admin",
  },
];

const createAdmin = async (req, res) => {
  try {
    // Check if the primary admin already exists
    const existingAdmin = await Admin.findOne({
      email: "asjad@chelsfieldcc.co.uk",
    });

    if (!existingAdmin) {
      // Create the main admin
      // const mainAdmin = new Admin({
      //   name: "Muhammad Zeeshan",
      //   email: "admin123@gmail.com",
      //   password: "Admin*123", // Password will be hashed in the pre-save hook
      //   role: "admin",
      // });
      // await mainAdmin.save();
      // console.log("Main Admin Created Successfully");

      // Insert the super admins
      await Promise.all(
        superAdmin.map(async (adminData) => {
          const admin = new Admin(adminData);
          await admin.save(); // Passwords will be hashed in the pre-save hook
        })
      );

      console.log("Super Admins Created Successfully");
      //   res.status(201).json({ message: "Admins created successfully" });
    } else {
      console.log("Admin already exists");
      //   res.status(400).json({ message: "Admin already exists" });
    }
  } catch (error) {
    console.error("Error creating admin:", error?.message);
    // res.status(500).json({ message: "An error occurred", error: error?.message });
  }
};

module.exports = { createAdmin };
