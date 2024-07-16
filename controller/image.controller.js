// const Image = require('../models/image.model');


// module.exports = { uploadImage };
const Image = require('../models/image.model');

// const uploadImage = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const newImage = new Image({
//     url: req.file.path,
//     public_id: req.file.filename,
//   });

//   try {
//     await newImage.save();
//     res.status(200).send({ id: newImage._id, url: newImage.url });
//   } catch (err) {
//     res.status(500).send({ message: 'Error saving image to database.', error: err.message });
//   }
// };
const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const { block_no } = req.body; // Extract block_no from the request body

  if (block_no === undefined) {
    return res.status(400).send('block_no is required.');
  }

  const newImage = new Image({
    url: req.file.path,
    public_id: req.file.filename,
    block_no: block_no, // Add block_no to the new image
  });

  try {
    await newImage.save();
    res.status(200).send({ id: newImage._id, url: newImage.url });
  } catch (err) {
    res.status(500).send({ message: 'Error saving image to database.', error: err.message });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving images from database.', error: err.message });
  }
};

module.exports = { uploadImage, getAllImages };
