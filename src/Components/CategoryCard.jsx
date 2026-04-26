import React from 'react';
import '../Styles/CategoryCard.css';
import { Link } from 'react-router-dom';

const CATEGORY_ICONS = {
  Cars: '🚗',
  Bikes: '🏍️',
  Phones: '📱',
  Computers: '💻',
};

function CategoryCard({ category, items }) {
  return (
    <div className="category-card">
      <div className="category-header">
        <span className="category-icon">{CATEGORY_ICONS[category] || '📦'}</span>
        <h2 className="category-title">{category}</h2>
        <span className="category-count">{items.length} item{items.length !== 1 ? 's' : ''}</span>
      </div>
      <div className="category-items">
        {items.map((item, index) => (
          <Link
            to={`/item/${encodeURIComponent(item.itemname)}`}
            className="item-preview"
            key={index}
          >
            <div className="item-preview-image">
              {item.image ? (
                <img src={item.image} alt={item.itemname} />
              ) : (
                <span className="item-placeholder-icon">{CATEGORY_ICONS[category] || '📦'}</span>
              )}
            </div>
            <div className="item-preview-info">
              <h3 className="item-preview-name">{item.itemname}</h3>
              <p className="item-preview-props">
                {item.itemprops.slice(0, 2).map((p) => p.label).join(' · ')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
