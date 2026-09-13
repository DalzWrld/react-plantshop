import PlantCard from "./PlantCard";

function PlantList({ plants = [] }) {
  if (plants.length === 0) {
    return (
      <ul className="cards">
        <li className="empty-state">
          <p>No plants found</p>
          <span>Try a different search or add a new plant above</span>
        </li>
      </ul>
    );
  }

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;