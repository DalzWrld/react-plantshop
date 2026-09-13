import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants = [], onAddPlant }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero" id="top" aria-label="Plantsy welcome">
        <div className="hero-copy">
          <p className="brand-hero">Plantsy</p>
          <h1 className="hero-title">Bring nature indoors</h1>
          <p className="hero-sub">
            Curate stock, welcome new arrivals, and keep every shelf green.
          </p>
          <a className="hero-cta" href="#catalogue">
            Browse catalogue
          </a>
        </div>
      </section>

      <main className="app-body">
        <div id="new-plant">
          <NewPlantForm onAddPlant={onAddPlant} />
        </div>

        <div className="section-header" id="catalogue">
          <h2 className="section-title">All Plants</h2>
          <p className="section-sub">
            Click &quot;In Stock&quot; to mark a plant as out of stock
          </p>
        </div>

        <div className="search-row">
          <Search search={search} onSearch={setSearch} />
        </div>

        <PlantList plants={filteredPlants} />
      </main>
    </>
  );
}

export default PlantPage;
