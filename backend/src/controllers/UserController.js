const XLSX = require("xlsx");
const { writeFileSync, existsSync, mkdirSync } = require("fs");
const path = require("path");
const { sendEmail } = require("../utils/sendEmail");
const { Member } = require("../models/UserModel");
const fs = require("fs");
exports.MembershipController = async (req, res, next) => {
  const {
    fullName,
    dateOfBirth,
    postcode,
    email,
    mobileNumber,
    address,
    emergencyContactName,
    emergencyPhone,
    relationship,
    alternativePhone,
    membershipType,
    medicalInfo,
  } = req.body;

  console.log("req.body", req.body);

  // Check for required fields
  if (
    !fullName ||
    !dateOfBirth ||
    !postcode ||
    !email ||
    !mobileNumber ||
    !address ||
    !emergencyContactName ||
    !emergencyPhone ||
    !relationship ||
    !membershipType
  ) {
    throw new Error("Please fill all the required fields.");
  }

  const MemberData = req.body;
  const member = new Member(MemberData);
  await member.save();

  const newData = [
    {
      "Full Name": fullName,
      "Date of Birth": dateOfBirth,
      "Post Code": postcode,
      Email: email,
      "Mobile Number": mobileNumber,
      Address: address,
      "Emergency Contact Name": emergencyContactName,
      "Emergency Contact Phone": emergencyPhone,
      Relationship: relationship,
      "Alternative Contact Phone": alternativePhone || "N/A",
      "Membership Type": membershipType,
      "Medical Information": medicalInfo || "None",
    },
  ];

  const uploadsDir = path.join(__dirname, "..", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const filePath = path.join(uploadsDir, "membership_data.xlsx");
  let workbook;

  if (fs.existsSync(filePath)) {
    // If the file exists, read and append the new data
    workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets["Membership Data"];
    const existingData = XLSX.utils.sheet_to_json(worksheet);
    const updatedData = [...existingData, ...newData];
    workbook.Sheets["Membership Data"] = XLSX.utils.json_to_sheet(updatedData);
  } else {
    // If the file doesn't exist, create a new workbook and sheet
    workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(newData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Membership Data");
  }

  XLSX.writeFile(workbook, filePath);

  const emailOptions2 = {
    fullName,
    email,
    subject: `New Membership`,
    message: `New member ${fullName}, email: ${email} has joined Chelsfield Cricket Club`,
    attachments: [
      {
        filename: "membership_data.xlsx",
        path: filePath,
      },
    ],
  };

  try {
    await sendEmail(emailOptions2);
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
exports.allMember = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error searching members:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
exports.deleteMember = async (req, res) => {
  try {
      const { ids } = req.body; // expecting an array of team IDs
      await Member.deleteMany({ _id: { $in: ids } }); // Use $in to match multiple IDs
      res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to delete member' });
  }
};