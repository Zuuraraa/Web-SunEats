import express from 'express';
import UserService from '../services/UserService';
import OrderService from '../services/OrderService';
import PaymentService from '../services/PaymentService';
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';

const router = express.Router();

// User Service Routes
router.get('/getUserInformation', UserService.getUserInformation);
router.post('/modifyCart', UserService.modifyCart);

// Order Service Routes
router.post('/convertCartToOrder', OrderService.convertCartToOrder);
router.post('/storeTransactionDetail', OrderService.storeTransactionDetail);
router.post('/proceedToCheckOut', OrderService.proceedToCheckOut);

// Payment Service Routes
router.post('/processCheckOut', PaymentService.processCheckOut);
router.post('/linkToExternalPayment', PaymentService.linkToExternalPayment);
router.post('/validatePaymentMethod', PaymentService.validatePaymentMethod);
router.post('/confirmPaymentStatus', PaymentService.confirmPaymentStatus);
router.post('/updatePaymentStatus', PaymentService.updatePaymentStatus);

// Product Service Routes
router.get('/displayProduct', ProductService.displayProduct);
router.post('/validateAvailability', ProductService.validateAvailability);

// Cart Service Routes
router.post('/storeProduct', CartService.storeProduct);
router.post('/updateProduct', CartService.updateProduct);
router.post('/storeProductQty', CartService.storeProductQty);
router.post('/storeProductDesc', CartService.storeProductDesc);
router.post('/removeProduct', CartService.removeProduct);

export default router;
