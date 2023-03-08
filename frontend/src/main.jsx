import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './pages/auth/authPage'
import { DashboardLayout } from './pages/layout'
import { Dashboard } from './pages/admin/dashobordPage'

import './styles/main.css'
import './styles/auth.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/getStarted' element={<SignUp />} />
        
        <Route path='/dashboard' element={<DashboardLayout/> }>
          <Route index element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
