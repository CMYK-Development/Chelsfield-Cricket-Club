const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of Birth is required"],
    },
    postcode: {
      type: String,
      required: [true, "Post Code is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    emergencyContactName: {
      type: String,
      required: [true, "Emergency Contact Name is required"],
    },
    emergencyPhone: {
      type: String,
      required: [true, "Emergency Contact Number is required"],
    },
    relationship: {
      type: String,
      required: [true, "Emergency Relationship is required"],
    },
    alternativePhone: {
      type: String,
    },
    // membershipType: {
    //   type: Boolean,
    //   default: false,
    // },
    // studentMembership: {
    //   type: Boolean,
    //   default: false,
    // },
    // regularMembership: {
    //   type: Boolean,
    //   default: false,
    // },
    // socialMembership: {
    //   type: Boolean,
    //   default: false,
    // },
    membershipType: {
      type: String, // The type is String since you're storing categories
      enum: ["Junior", "Student", "Regular", "Social"], // Allowed values
      default: "Regular", // Default value
      required: true, // Ensures a value is provided
    },
    medicalInfo: {
      type: String,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const Member = mongoose.model("Member", MembershipSchema);

module.exports = { Member };
