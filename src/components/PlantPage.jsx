import React, { useState } from "react";
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
      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Welcome to the admin dashboard</p>
          <h1 className="hero-title">Bring nature indoors</h1>
          <p className="hero-sub">
            Manage your plant catalogue, track stock, and add new arrivals — all in one place.
          </p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">{plants.length}</div>
              <div className="hero-stat-label">Plants listed</div>
            </div>
            <div>
              <div className="hero-stat-num">280+</div>
              <div className="hero-stat-label">Orders shipped</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-arch">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80"
              alt="Featured plant"
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="app-body">
        {/* Add plant form */}
        <NewPlantForm onAddPlant={onAddPlant} />

        {/* Plant list section */}
        <div className="section-header">
          <h2 className="section-title">All Plants</h2>
          <p className="section-sub">Click "In Stock" to mark a plant as sold out</p>
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