import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import Drawer from 'react-modern-drawer'
import { SignInModal } from '../SignInModal';
import { SignUpModal } from '../SignUpModal';

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

  return (
    <header className="header">
      {isSignInModalOpen && <SignInModal onClose={() => setIsSignInModalOpen(false)}/>}
      {isSignUpModalOpen && <SignUpModal onClose={() => setIsSignUpModalOpen(false)}/>}

      <a href="/" className="logo">
        <img src={LogoImg} alt="Logo" />
        <span>FitoTerápica</span>
      </a>

      {width > 800 ?
        <nav className="nav-bar">
          <a href="/about-plants">Plantas medicinais</a>
          <div />

          {user ? 
            <button onClick={signOut}>
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
          <a href="/about-us">Sobre nós</a>
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

                <a
                  href="/about-plants"
                  onClick={toggleDrawer}
                >
                  Plantas medicinais
                </a>

                {user ?
                  <button onClick={() => {
                    signOut();
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
                
                <a
                  href="/about-us"
                  onClick={toggleDrawer}
                >
                  Sobre nós
                </a>
              </div>

            </Drawer>
        </>
      }
    </header>
  );
}