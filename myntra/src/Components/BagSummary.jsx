const BagSummary = ({ bagSummary }) => {

  return <div className="bag-details-container">
    <div className="price-header">Price Details ({bagSummary.items} items)</div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-iten-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagSummary.totalAmount}</span>
    </div>
    <button className="btn-place-order">
      <div className="order-button" onClick={() => { console.log('Order is Placed') }}>PLACE ORDER</div>
    </button>
  </div>
}

export default BagSummary;