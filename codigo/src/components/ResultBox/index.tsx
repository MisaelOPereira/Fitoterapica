import { Plant } from '../../services/api';

import './styles.css';

interface ResultBoxProps {
  plant: Plant;
}

export function ResultBox({ plant }: ResultBoxProps) {
  return (
    <a href={`/plants/${plant.NomeComum}`} className="result-box">
      <div className="image" />
      <h2>{plant.NomeComum}</h2>
    </a>
  );
}