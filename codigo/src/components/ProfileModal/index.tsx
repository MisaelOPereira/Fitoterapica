import { useAuth } from '../../hooks/useAuth';
import { v4 as uuid } from 'uuid';

import { IoMdExit } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import './styles.css';
import { useEffect, useState } from 'react';

interface ModalProps {
  onClose(): void;
}

export function ProfileModal({ onClose }: ModalProps) {
  const { user, signOut, deleteAccount } = useAuth();

  const [orderedPlants, setOrderedPlants] = useState<String[]>([]);

  useEffect(() => {
    if (user) {
      setOrderedPlants(user.favorite_plants.sort());
    }
  }, []);

  const [isDeleteSelected, setIsDeleteSelected] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  async function handleDeleteAccount() {
    if (isDeleteSelected) {
      setIsDeleteLoading(true);
      
      await deleteAccount();
    } else {
      setIsDeleteSelected(true);
    }
  }

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="form-box profile-box" onClick={e => e.stopPropagation()}>
        <div className="profile-header">
          <span>{user && user.name}</span>

          <button title="Sair" onClick={signOut}>
            <IoMdExit />
          </button>

          <button className="close"onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="profile-content">
          <div className="profile-title">
            <AiFillStar />
            <h2>Plantas favoritas:</h2>
          </div>

          {orderedPlants.length > 0 ? (
            orderedPlants.map(plant => (
              <a key={uuid()} href={`/plants/${plant}`}>
                {plant}
                <BsBoxArrowUpRight />
              </a>
            ))
          ) : (
            <div className="no-favorites">
              <FiTrash2 />
              <span>NENHUMA PLANTA ADICIONADA<br/>AOS FAVORITOS</span>
            </div>
          )}
        </div>

        <div className="profile-footer">
          <button onClick={handleDeleteAccount} disabled={isDeleteLoading}>
            {isDeleteSelected ? (
              'CLIQUE NOVAMENTE PARA CONFIRMAR'
            ) : (
              'DELETAR CONTA'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}