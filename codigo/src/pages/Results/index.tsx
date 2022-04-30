import { Sidebar } from '../../components/Sidebar';
import { ResultBox } from '../../components/ResultBox';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export function Results() {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const uses = params.getAll('use');
  const regions = params.getAll('region');

  console.log('Nome: ', name);
  console.log('Usos: ', uses);
  console.log('Regiões ', regions);

  return (
    <div className="results-page">
      <Sidebar />
      <div className="results">
        <div className="results-title">
          <a href="/">
            <FiArrowLeft />
          </a>
          
          <h1>Resultados</h1>
        </div>

        <div className="results-boxes">
          {Array.from({length: 8}, (_, i) => i + 1).map(e => {
          return (
            <ResultBox />
          )
        })}
        </div>
      </div>
    </div>
  );
}