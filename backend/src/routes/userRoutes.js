import express from 'express';
import UserService from '../services/UserService';

const router = express.Router();

router.get('/getUserInformation', UserService.getUserInformation);
router.post('/modifyCart', UserService.modifyCart);
