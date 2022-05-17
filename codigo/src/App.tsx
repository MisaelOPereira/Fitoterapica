import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'

import { Layout } from './components/Layout';

import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { Plants } from './pages/Plants'
import { AboutUs } from './pages/AboutUs'


import './GlobalStyle.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/plants/:plantName" element={<Plants />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
