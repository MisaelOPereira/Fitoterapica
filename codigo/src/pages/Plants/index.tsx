import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { api, Plant } from "../../services/api";

import { Sidebar } from "../../components/Sidebar";

import './styles.css';


interface PlantsParams {
  plantName: string;
}

export function Plants() {
  const { plantName } = useParams<PlantsParams>();

  const [plants, setPlants] = useState<Plant[]>([]);
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/plants');
      const responsePlants = response.data as Plant[];
      responsePlants.shift();

      setPlants(responsePlants);

      const thisPlant = responsePlants.find(plant => plant.NomeComum === plantName);
      setPlant(thisPlant);
    }

    (async () => await fetchData())();
  }, []);

  return plant ? (
    <div className="plant-page">
      <Sidebar plants={plants} />
      <div className="plant-container">
        <div className="plant-header">
          <a href="/">
            <FiArrowLeft />
          </a>
          
          <h1>{plant.NomeComum}</h1>
        </div>

        <div className="plant">
          <div className="plant-info">
            {plant.OutrosNomesComuns.length > 0 && (<p><strong>Outros nomes: </strong>{plant.OutrosNomesComuns.join(', ')}</p>)}
            <p><strong>Nome científico: </strong>{plant.NomeCientífico}</p>
            <p><strong>Regionalidade: </strong>{plant.Regionalidade.length < 5 ? plant.Regionalidade.join(', ') : 'Todo o Brasil'}</p>
            <p><strong>Origem: </strong>{plant.Origem}</p>
            <p><strong>Partes usadas: </strong>{plant.PartesUsadas.join(', ')}</p>
            <p><strong>Uso principal: </strong>{plant.AçãoSobreOCorpo.UsoPrincipal}</p>
            <p><strong>Demais usos: </strong>{plant.AçãoSobreOCorpo.UsosRelacionados.join(', ')}</p>
            <p><strong>Nome científico: </strong>{plant.NomeCientífico}</p>
          </div>

          <div className="image" />
        </div>

        <p className="mb"><strong>Formas de uso: </strong></p>
        {plant.FormasDeUso.map(info => (
          <p key={info}>- {info}</p>
        ))}

        {plant.AçãoSobreOCorpo.ContraIndicações.length > 0 && (
          <>
            <p className="mb"><strong>Contraindicações: </strong></p>
            {plant.AçãoSobreOCorpo.ContraIndicações.map(info => (
              <p key={info}>- {info}</p>
            ))}
          </>
        )}
      </div>
    </div>
  ) : (
    <div />
  );
}