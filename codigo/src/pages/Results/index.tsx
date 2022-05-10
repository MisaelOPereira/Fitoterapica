import { useState, useEffect } from 'react';
import { api, Plant } from '../../services/api';

import { Sidebar } from '../../components/Sidebar';
import { ResultBox } from '../../components/ResultBox';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export function Results() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/plants');
      const responsePlants = response.data as Plant[];
      responsePlants.shift();

      setPlants(responsePlants);

      const params = new URLSearchParams(window.location.search);

      const name = params.get('name');
      const uses = params.getAll('use');
      const regions = params.getAll('region');

      if (name) {
        const filtered = responsePlants.filter(plant => {
          return plant.NomeComum.toLowerCase().includes(name.toLowerCase());
        });

        setFilteredPlants(filtered);
      } else if (uses.length || regions.length) {
        const filtered = responsePlants.filter(plant => {
          let hasFilters = false;

          if (uses.length) {
            uses.forEach(use => {
              if (plant.AçãoSobreOCorpo.UsosRelacionados.includes(use)) {
                hasFilters = true;
                return;
              }
            });
          }

          if (regions.length) {
            regions.forEach(region => {
              if (plant.Regionalidade.includes(region)) {
                hasFilters = true;
                return;
              }

              hasFilters = false;
            });
          }

          return hasFilters;
        });

        setFilteredPlants(filtered);
      } else {
        setFilteredPlants(responsePlants);
      }
    }
    
    (async () => await fetchData())();
  }, []);

  return (
    <div className="results-page">
      <Sidebar plants={plants} />
      <div className="results">
        <div className="results-title">
          <a href="/">
            <FiArrowLeft />
          </a>
          
          <h1>Resultados</h1>
        </div>

        <div className="results-boxes">
          {filteredPlants.map(plant => {
          return (
            <ResultBox key={plant.PlantId} plant={plant} />
          )
        })}
        </div>
      </div>
    </div>
  );
}