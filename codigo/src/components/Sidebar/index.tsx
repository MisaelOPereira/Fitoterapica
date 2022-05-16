import { Link } from 'react-router-dom';
import { Plant } from '../../services/api';

import './styles.css';

interface SideBarProps {
  plants: Plant[]
}

export function Sidebar({ plants }: SideBarProps) {
  return (
    <div className="sidebar">
      <span>LISTAGEM GERAL</span>
      <nav>
        {plants.map(plant => {
          return (
            <Link
              key={plant.PlantId}
              to={`/plants/${plant.NomeComum}`}
            >
              {plant.NomeComum}
            </Link>
          )
        })}
      </nav>
    </div>
  );
}