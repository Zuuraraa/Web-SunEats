import express from 'express';
import CartPage from '../pages/CartPage';

const router = express.Router();

router.post('/storeProduct', CartPage.storeProduct);
router.post('/updateProduct', CartPage.updateProduct);
router.post('/storeProductQty', CartPage.storeProductQty);
router.post('/storeProductDesc', CartPage.storeProductDesc);
router.post('/removeProduct', CartPage.removeProduct);

export default router;
