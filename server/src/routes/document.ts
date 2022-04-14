// import packages and dependencies
import { isAuthenticated, isSigner } from '../utils';
import document from "../controllers/document";
import { multer } from "../utils";
import express from "express";
const router = express();

router.get('/', isSigner, document.getDocuments);

router.post('/', isSigner, document.addDocument);

router.post('/image', multer.single('file'), document.postImage);

router.put('/:index', isSigner, document.updateDocument);

router.get('/metrics', isSigner, document.getMetrics);

router.get('/:index', isSigner, document.getDocument);
 
export default router;