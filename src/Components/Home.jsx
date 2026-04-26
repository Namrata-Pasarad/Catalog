import React from 'react';
import CategoryCard from './CategoryCard';
import data from '../Data/data.json';
import '../Styles/Home.css';

function Home() {
  const grouped = data.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="home">
      <header className="home-header">
        <h1>Product Catalog</h1>
        <p className="home-subtitle">Browse our collection across categories</p>
      </header>
      <div className="categories-grid">
        {Object.entries(grouped).map(([category, items]) => (
          <CategoryCard key={category} category={category} items={items} />
        ))}
      </div>
    </div>
  );
}

export default Home;
