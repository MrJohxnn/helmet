import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouterAdm } from './Routes/AppRouterAdm';
import { AppRouterCli } from './Routes/AppRouterCli';
import { AppRouterProf } from './Routes/AppRouterProf';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <AppRouterCli />
    </Router>
)
