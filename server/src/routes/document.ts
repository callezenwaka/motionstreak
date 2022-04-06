// import packages and dependencies
// import { authenticate } from '../utils/auth';
import document from "../controllers/document";
import express from "express";
const router = express();

router.get('/', document.getDocuments);

router.post('/', document.addDocument);

router.post('/image', document.postImage);

router.put('/:index', document.updateDocument);

router.get('/:index', document.getDocument);
 
export default router;