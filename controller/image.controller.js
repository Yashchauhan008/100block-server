const Image = require('../models/image.model');

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const newImage = new Image({
    url: req.file.path,
    public_id: req.file.filename,
  });

  try {
    await newImage.save();
    res.status(200).send({ id: newImage._id, url: newImage.url });
  } catch (err) {
    res.status(500).send({ message: 'Error saving image to database.', error: err.message });
  }
};

module.exports = { uploadImage };
