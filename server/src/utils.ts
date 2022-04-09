'use strict';

// Import packages and dependencies
import Multer from 'multer';
export const multer = Multer({
  storage: Multer.memoryStorage(),
  // no larger than 5mb
  limits: { fileSize: 5 * 1024 * 1024 },
});

// export default {
//   multer,
// };