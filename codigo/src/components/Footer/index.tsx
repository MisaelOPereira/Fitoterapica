import { useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import { SignInModal } from '../SignInModal';

import './styles.css';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="footer">
      <p>A FitoTerápica é um site informativo. Não recomendamos o uso de nenhum medicamento sem uma prévia consulta a um profissional de saúde.</p>
    </footer>
  );
}