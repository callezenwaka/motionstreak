// import packages and dependencies
// import { isAuthenticated } from '../auth';
import document from "../controllers/document";
import { multer } from "../utils";
import express from "express";
const router = express();

router.get('/', document.getDocuments);

router.post('/', document.addDocument);

router.post('/image', multer.single('file'), document.postImage);

router.put('/:index', document.updateDocument);

router.get('/:index', document.getDocument);
 
export default router;