import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { AppProvider } from './Context/AppProvider.jsx ';

function App() {

    return (
    <div className={`App`}>
      <HashRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppProvider>
      </HashRouter>
    </div>
  )
}

export default App
