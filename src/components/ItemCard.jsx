import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="item-card">
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} className="item-image" />
      )}
      <div className="item-details">
        <h3>{item.name}</h3>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>{item.description}</p>
        
        <p className="temperature-info">
          <strong>Temperature Requirement:</strong> {item.temperatureRequirement}
        </p>

        <div className="item-actions">
          <Link to={`/edit/${item._id}`} className="btn secondary">Edit</Link>
          <button onClick={() => onDelete(item._id)} className="btn danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
