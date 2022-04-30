import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'

import { Layout } from './components/Layout';

import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { Plants } from './pages/Plants'
import { AboutPlants } from './pages/AboutPlants'
import { AboutUs } from './pages/AboutUs'


import './GlobalStyle.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/results" exact component={Results} />
            <Route path="/plants/:id" exact component={Plants} />
            <Route path="/about-plants" exact component={AboutPlants} />
            <Route path="/about-us" exact component={AboutUs} />
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
