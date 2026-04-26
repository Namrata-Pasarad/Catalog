import React from 'react';
import data from '../Data/data.json';
import '../Styles/ItemDetail.css';
import { Link, useParams } from 'react-router-dom';

const CATEGORY_ICONS = {
  Cars: '🚗',
  Bikes: '🏍️',
  Phones: '📱',
  Computers: '💻',
};

function ItemDetail() {
  const { name } = useParams();
  const item = data.items.find((i) => i.itemname === decodeURIComponent(name));

  if (!item) {
    return (
      <div className="item-detail-page">
        <div className="item-not-found">
          <h2>Item not found</h2>
          <Link to="/" className="back-link">← Back to catalog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-page">
      <Link to="/" className="back-link">← Back to catalog</Link>
      <div className="item-detail-card">
        <div className="item-detail-image">
          {item.image ? (
            <img src={item.image} alt={item.itemname} />
          ) : (
            <div className="item-detail-placeholder">
              <span>{CATEGORY_ICONS[item.category] || '📦'}</span>
            </div>
          )}
        </div>
        <div className="item-detail-content">
          <span className="item-detail-category">{item.category}</span>
          <h1 className="item-detail-name">{item.itemname}</h1>
          <div className="item-detail-props">
            <h3>Specifications</h3>
            <div className="props-grid">
              {item.itemprops.map((prop, index) => (
                <div className="prop-card" key={index}>
                  <span className="prop-label">{prop.label}</span>
                  <span className="prop-value">{prop.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
