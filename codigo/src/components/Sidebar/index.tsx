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
            <a
              key={plant.PlantId}
              href={`/plants/${plant.NomeComum}`}
            >
              {plant.NomeComum}
            </a>
          )
        })}
      </nav>
    </div>
  );
}