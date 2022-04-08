'use strict';

// Import packages and dependencies
import Multer from 'multer';
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
export const multer = Multer({
  // storage: Multer.memoryStorage(),
  // no larger than 5mb
  limits: { fileSize: 5 * 1024 * 1024 },
});

// module.exports = {
// 	multer,
// };