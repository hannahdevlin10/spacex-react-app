import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MissionsProvider } from './context/MissionsContext';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={client}>
        <MissionsProvider>
          <App /> 
        </MissionsProvider>
     </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
