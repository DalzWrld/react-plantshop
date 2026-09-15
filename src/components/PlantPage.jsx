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
          <h1 className="hero-title">Top Selling Plants</h1>
          <p className="hero-sub">
            Discover lush indoor greens curated for modern spaces — manage stock
            and grow your catalogue with ease.
          </p>
          <a className="hero-cta" href="#catalogue" aria-label="Browse catalogue">
            →
          </a>
          <div className="hero-meta">
            <span className="hero-stars" aria-label="5 star rating">
              ★★★★★
            </span>
            <ul className="hero-social">
              <li>
                <a href="#catalogue" aria-label="Facebook">
                  f
                </a>
              </li>
              <li>
                <a href="#catalogue" aria-label="Twitter">
                  𝕏
                </a>
              </li>
              <li>
                <a href="#catalogue" aria-label="Instagram">
                  ◯
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&q=80"
            alt="Featured leafy plant in a pot"
          />
        </div>
      </section>

      <main className="app-body">
        <div id="new-plant">
          <NewPlantForm onAddPlant={onAddPlant} />
        </div>

        <div className="section-header" id="catalogue">
          <h2 className="section-title">Indoor Plants</h2>
          <p className="section-sub">
            Browse the collection and click &quot;In Stock&quot; to mark a plant
            as out of stock.
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