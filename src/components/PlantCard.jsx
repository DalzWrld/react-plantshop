import { useState } from "react";

function PlantCard({ plant }) {
  const { image, name, price } = plant;
  const [soldOut, setSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <div className="card-image-wrap">
        <div className="card-arch">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="card-body">
        <span className="card-category">Indoor Plant</span>
        <h4>{name}</h4>
        <p className="card-price">${price.toFixed(2)}</p>
        <div className="card-footer">
          <button
            className={`btn-stock ${soldOut ? "sold-out" : "in-stock"}`}
            onClick={() => setSoldOut((prev) => !prev)}
          >
            {soldOut ? "Sold Out" : "In Stock"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default PlantCard;