import React from 'react'
import ReactDOM from 'react-dom/client'
import { RepClientesS } from './RepClientesS'
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from './Routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <AppRouter />
    </Router>
)
