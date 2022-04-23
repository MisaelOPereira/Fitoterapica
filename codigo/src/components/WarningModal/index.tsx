import { Button } from '../Button';
import { IoMdWarning } from 'react-icons/io';

import './styles.css';

interface ModalProps {
  onClose(): void;
}

export function WarningModal({ onClose }: ModalProps) {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <IoMdWarning />

        <p>A FitoTerápica é um site informativo de divulgação e educação sobre plantas medicinais. Não recomendamos o uso de nenhum medicamento sem uma prévia consulta a um profissional de saúde.</p>
        
        <Button
          onClick={onClose}
        >
          Li e estou ciente
        </Button>
      </div>
    </div>
  );
}