import { useAuth } from '../../hooks/useAuth';

import { IoMdExit } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import './styles.css';

interface ModalProps {
  onClose(): void;
}

export function ProfileModal({ onClose }: ModalProps) {
  const { user, signOut } = useAuth();

  const orderedPlants = user.favorite_plants.sort();

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="form-box profile-box" onClick={e => e.stopPropagation()}>
        <div className="profile-header">
          <span>{user.name}</span>

          <button title="Sair" onClick={signOut}>
            <IoMdExit />
          </button>

          <button className="close"onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="profile-content">
          <div>
            <AiFillStar />
            <h2>Plantas favoritas:</h2>
          </div>

          {orderedPlants.map(plant => (
            <a key={plant} href={`/plants/${plant}`}>
              {plant}
              <BsBoxArrowUpRight />
            </a>
          ))}
        </div>

        <div className="profile-footer" />
      </div>
    </div>
  );
}