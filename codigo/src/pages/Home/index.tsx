import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { MultiValue } from 'react-select';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { FiSearch } from 'react-icons/fi';
import MainLogoImg from '../../assets/main-logo.png';

import './styles.css';

const useOptions = [
  { value: 'Anti-inflamatório', label: 'Anti-inflamatório' },
  { value: 'Estomacal', label: 'Estomacal' },
  { value: 'Estimulante', label: 'Estimulante' },
  { value: 'Tônico', label: 'Tônico' },
  { value: 'Sedativo', label: 'Sedativo' },
  { value: 'Antifebril', label: 'Antifebril' },
  { value: 'Analgésico', label: 'Analgésico' },
  { value: 'Expectorante', label: 'Expectorante' },
  { value: 'Tosse', label: 'Tosse' },
]

const regionOptions = [
  { value: 'Norte', label: 'Norte' },
  { value: 'Nordeste', label: 'Nordeste' },
  { value: 'Centro-Oeste', label: 'Centro-Oeste' },
  { value: 'Sudeste', label: 'Sudeste' },
  { value: 'Sul', label: 'Sul' }
]

export function Home() {
  const [searchOption, setSearchOption] = useState('name');
  const [searchNameValue, setSearchNameValue] = useState('');
  const [searchUseValues, setSearchUseValues] = useState<string[]>([]);
  const [searchRegionValues, setSearchRegionValues] = useState<string[]>([]);

  const history = useHistory();

  function handleSelectChange(
    options: MultiValue<{value: string}>,
    selectInput: 'use' | 'region'
  ) {
    if (selectInput == 'use') {
      setSearchUseValues(options.map(option => option.value));
    } else {
      setSearchRegionValues(options.map(option => option.value));
    }
  }

  function handleFormSend() {
    let queryString = '';

    if (searchOption == 'name' && searchNameValue) {
      queryString = `name=${searchNameValue}`;
    } else {
      queryString = searchUseValues.map((value, index) => {
        return `use=${value}${index !== searchUseValues.length - 1 || searchRegionValues.length ? '&' : ''}`
      }).join('') + searchRegionValues.map((value, index) => {
        return `region=${value}${index !== searchRegionValues.length - 1 ? '&' : ''}`
      }).join('');
    }

    history.push(`/results?${queryString}`);
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <img
          src={MainLogoImg}
          alt="Logo da FitoTerápica"
          className="logo-img"
        />

        <h1 className="title">Buscar plantas medicinais por:</h1>

        <div className="search-options">
          <Button
            onClick={() => setSearchOption('name')}
            className={searchOption === 'name' ? 'button' : 'button outlined'}
          >
            Nome
          </Button>
          <Button
            onClick={() => setSearchOption('filter')}
            className={searchOption === 'filter' ? 'button' : 'button outlined'}
          >
            Filtros
          </Button>
        </div>

        <form className="search-form" onSubmit={() => handleFormSend()}>
          {searchOption === 'name' ? 
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchNameValue(event.target.value)
              }}
              type="text"
              placeholder="Nome da planta"
            />
          :
            <>
              <div className="dropdown">
                <Select
                  options={useOptions}
                  onChange={options => handleSelectChange(options, 'use')}
                  isMulti
                  isSearchable={false}
                  placeholder="Utilidade"
                />
              </div>

              <div className="dropdown">
                <Select
                  options={regionOptions}
                  onChange={options => handleSelectChange(options, 'region')}
                  isMulti
                  isSearchable={false}
                  menuPlacement="auto"
                  placeholder="Região"
                />
              </div>
            </>
          }

          <Button type="submit">
            <FiSearch />
            Pesquisar
          </Button>
        </form>
      </div>
    </div>
  );
}