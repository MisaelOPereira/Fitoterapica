import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";
import db from '../../../data/db.json';

import { Sidebar } from "../../components/Sidebar";
import { Plant } from "../../services/api";

import './styles.css';


interface PlantsParams {
  plantName: string;
}

export function Plants() {
  const { plantName } = useParams<PlantsParams>();

  const [plants, setPlants] = useState<Plant[]>([]);
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const response = db.plants as Plant[];
    response.shift();
    const responsePlants = response;

    setPlants(responsePlants);

    const thisPlant = responsePlants.find(plant => plant.NomeComum === plantName);
    setPlant(thisPlant);
  }, []);

  return plant ? (
    <div className="plant-page">
      <Sidebar plants={plants} />
      <div className="plant">
        <div className="plant-header">
          <a href="/">
            <FiArrowLeft />
          </a>
          
          <h1>{plant.NomeComum}</h1>

          <span>({plant.NomeCientífico})</span>
        </div>

        <div className="plant-info">
          {Object.entries(plant).map(info => {
            return (
              <p>
                <strong>{info[0]}: </strong>
                {String(info[1])}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}