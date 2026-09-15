import { useState } from "react";

function PlantCard({ plant }) {
  const { image, name, price } = plant;
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <div className="card-image-wrap">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <p>Price: ${parseFloat(price).toFixed(2)}</p>
        <div className="card-footer">
          <button
            type="button"
            data-stock={inStock ? "in" : "out"}
            onClick={() => setInStock((prev) => !prev)}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default PlantCard;