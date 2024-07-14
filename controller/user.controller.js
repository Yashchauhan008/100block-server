// const User = require('../models/user.model');

// // Get all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error: error.message });
//   }
// };

// // Upload new user
// const uploadUser = async (req, res) => {
//   try {
//     const { email, name, picture } = req.body;
    
//     const newUser = new User({
//       email,
//       name,
//       picture
//     });

//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(400).json({ message: "Error creating user", error: error.message });
//   }
// };

// module.exports = {
//   getAllUsers,
//   uploadUser
// };

const User = require('../models/user.model');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// Upload new user
const uploadUser = async (req, res) => {
  try {
    const { email, name, picture } = req.body;
    
    const newUser = new User({
      email,
      name,
      picture
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  uploadUser
};
