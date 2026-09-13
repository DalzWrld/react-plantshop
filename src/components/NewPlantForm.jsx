import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create plant");
        return res.json();
      })
      .then((plant) => {
        onAddPlant(plant);
        setName("");
        setImage("");
        setPrice("");
      })
      .catch(() => {
        // Still surface the plant locally if the server is unavailable
        onAddPlant(newPlant);
        setName("");
        setImage("");
        setPrice("");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      <input
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
