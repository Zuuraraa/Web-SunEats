import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyOrder.css';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const statusTabs = ['All Orders', 'Order Received', 'Food Processing', 'Order Complete','Out Of Stock'];

  const filteredOrders = activeTab === 'All Orders'
    ? orders
    : orders.filter(order => order.status.toLowerCase() === activeTab.toLowerCase());

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(angka);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('https://web-suneats-backend.onrender.com/api/order/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-orders-container">
      <h1 className="my-orders-title">My Delicious Meals</h1>

      <div className="tabs">
        {statusTabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="skeleton-loader">Loading orders...</div>
      ) : (
        <div className="orders-list">
          {filteredOrders.map(order => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div>
                  <span className="order-number">#{order._id.slice(-6).toUpperCase()}</span>
                  <span className={`status-badge ${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="order-products">
                {order.items.map((item, idx) => (
                  <div key={idx} className="product-item">
                    <div className="product-name">{item.name}</div>
                    <div className="product-quantity">x{item.quantity}</div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="total-text">Total Orders:</div>
                <div className="total-price">{formatRupiah(order.amount)}</div>
              </div>

              <div className="order-actions">
                <button className="detail-button" onClick={() => setSelectedOrder(order)}>See Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Order Details</h2>
            <p><strong>Order Id:</strong> #{selectedOrder._id}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Address:</strong> {selectedOrder.address?.street}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod || '—'}</p>

            <div className="modal-products">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="product-item">
                  <div className="product-name">{item.name}</div>
                  <div className="product-quantity">x{item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <strong>Total:</strong> {formatRupiah(selectedOrder.amount)}
            </div>

            <button className="close-button" onClick={() => setSelectedOrder(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
