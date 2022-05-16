import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import { SignInModal } from '../SignInModal';
import { SignUpModal } from '../SignUpModal';
import { ProfileModal } from '../ProfileModal';

import LogoImg from '../../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

import './styles.css';
import 'react-modern-drawer/dist/index.css';

export function Header() {
  const { user, signOut } = useAuth();
  const { width } = useWindowDimensions();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const toggleDrawer = () => {
      setIsDrawerOpen((prevState) => !prevState)
  }

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (isSignInModalOpen || isSignUpModalOpen || isProfileModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSignInModalOpen, isSignUpModalOpen, isProfileModalOpen]);

  return (
    <header className="header">
      {isSignInModalOpen && <SignInModal onClose={() => setIsSignInModalOpen(false)}/>}
      {isSignUpModalOpen && <SignUpModal onClose={() => setIsSignUpModalOpen(false)}/>}
      {isProfileModalOpen && <ProfileModal onClose={() => setIsProfileModalOpen(false)}/>}

      <Link to="/" className="logo">
        <img src={LogoImg} alt="Logo" />
        <span>FitoTerápica</span>
      </Link>

      {width > 800 ?
        <nav className="nav-bar">
          {user ? 
            <button onClick={() => setIsProfileModalOpen(true)}>
              <FaUser />
              {user.name.split(' ')[0]}
            </button>
            :
            <>
              <button onClick={() => setIsSignInModalOpen(true)}>Entrar</button>
              <div />
              <button onClick={() => setIsSignUpModalOpen(true)}>Cadastrar</button>
            </>
          }

          <div />
          <Link to="/about-us">Sobre nós</Link>
        </nav>
        :
        <>
            <button
              className="drawer-burger-button"
              onClick={toggleDrawer}
            >
              <GiHamburgerMenu />
            </button>

            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction='right'
            >
              <div className="drawer">
                <div className="drawer-top">
                  <span>NAVEGAÇÃO</span>

                  <button onClick={toggleDrawer}>
                    <IoClose />
                  </button>
                </div>

                {user ?
                  <button onClick={() => {
                    setIsProfileModalOpen(true);
                    toggleDrawer();
                  }}>
                    <FaUser />
                    {user.name.split(' ')[0]}
                  </button>
                  :
                  <>
                    <button
                      onClick={() => {
                        setIsSignInModalOpen(true);
                        toggleDrawer();
                      }}
                    >
                      Entrar
                    </button>
                    <button
                      onClick={() => {
                        setIsSignUpModalOpen(true);
                        toggleDrawer();
                      }}
                    >
                      Cadastrar
                    </button>
                  </>
                }
                
                <Link
                  to="/about-us"
                  onClick={toggleDrawer}
                >
                  Sobre nós
                </Link>
              </div>

            </Drawer>
        </>
      }
    </header>
  );
}