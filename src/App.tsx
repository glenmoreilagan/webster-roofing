import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeIndex from './home'
import MainLayout from './components/layouts/main-layout'

import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomeIndex />}>
              <Route path='/services' element={<HomeIndex />} />
              <Route path='/projects' element={<HomeIndex />} />
              <Route path='/locations' element={<HomeIndex />} />
              <Route path='/contact' element={<HomeIndex />} />
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App
