import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { AppProvider } from './Context/AppProvider.jsx ';
import { CountryPage } from './pages/CountryPage/CountryPage';
import { NavBar } from './components/NavBar/NavBar';

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
        </AppProvider>
      </HashRouter>
    </div>
  )
}

export default App
