import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppProvider } from './components/Context/AppProvider.jsx';
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { CountryPage } from './pages/CountryPage/CountryPage';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {

    return (
    <div className={`App`}>
      <HashRouter>
        <AppProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:alpha3Code" element={<CountryPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AppProvider>
      </HashRouter>
    </div>
  )
}

export default App
