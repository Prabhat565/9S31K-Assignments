import React from "react";
import PropTypes from "prop-types";
import "./Order.css";

const Order = ({ title, orders }) => {
  return (
    <section>
      <main className="main">
        <h1 className="page-title">{title}</h1>
        <div className="orders-grid">
          {orders.map((order) => (
            <div className="order-container" key={order.id}>
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <span className="order-header-label">Order Placed:</span>
                    <span>{order.date}</span>
                  </div>
                  <div className="order-total">
                    <span className="order-header-label">Total:</span>
                    <span>{order.total}</span>
                  </div>
                </div>
                <div className="order-header-right-section">
                  <span className="order-header-label">Order ID:</span>
                  <span>{order.id}</span>
                </div>
              </div>

              <div className="order-details-grid">
                {order.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="product-image-container">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="product-details">
                      <div className="product-name">{item.name}</div>
                      <div className="product-delivery-date">
                        Arriving on: {item.deliveryDate}
                      </div>
                      <div className="product-quantity">
                        Quantity: {item.quantity}
                      </div>
                      <button className="buy-again-button button-primary">
                        {/* <img className="buy-again-icon" src="/images/icons/buy-again.png" alt="Buy Again Icon" /> */}
                        <span className="buy-again-message">Buy it again</span>
                      </button>
                    </div>
                    <div className="product-actions">
                      <a href="/tracking">
                        <button className="track-package-button button-secondary">
                          Track package
                        </button>
                      </a>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

Order.propTypes = {
  title: PropTypes.string,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      total: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          deliveryDate: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ),
};

Order.defaultProps = {
  title: "Your Orders",
  orders: [],
};

export default Order;
