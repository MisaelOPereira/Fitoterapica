import { Link } from 'react-router-dom';
import { Plant } from '../../services/api';
import { getImage } from '../../utils/getImage';

import './styles.css';

interface ResultBoxProps {
  plant: Plant;
}

export function ResultBox({ plant }: ResultBoxProps) {
  return (
    <Link to={`/plants/${plant.NomeComum}`} className="result-box">
      <img src={getImage(plant.NomeComum)} alt={plant.NomeComum} className="image" />

      <h2>{plant.NomeComum}</h2>
    </Link>
  );
}