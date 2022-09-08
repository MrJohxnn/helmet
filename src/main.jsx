import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouterCli } from './Routes/AppRouterCli';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <AppRouterCli />
    </Router>
)
