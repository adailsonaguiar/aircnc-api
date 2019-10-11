const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const nameOriginal = file.originalname.replace(' ', '');
      const name = path.basename(nameOriginal, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    }
  })
};
