import { useState } from "react";

import { WarningModal } from "../WarningModal";
import { Header } from "../Header";
import { Footer } from "../Footer";

import './styles.css';
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactElement
}

function HoursDiff(dt2: Date, dt1: Date) {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);

  return Math.abs(Math.round(diff));
}

export function Layout({ children }: LayoutProps) {

  const modal = localStorage.getItem('modalShownAt');

  const [isModalOpen, setIsModalOpen] = useState(!modal);

  if (modal && HoursDiff(new Date(), new Date(modal)) > 24) {
    localStorage.removeItem('modalShownAt');
  }
  
  function closeModal() {
    if (!modal) {
      localStorage.setItem('modalShownAt', String(new Date()));
    }
    
    setIsModalOpen(false);
  }

  return (
    <div className="layout">
      <Toaster
          position="top-right"
          reverseOrder={false}
      />

      {isModalOpen && <WarningModal onClose={closeModal} />}

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}