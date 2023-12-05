import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';

const chain = "mumbai";
const id = "fb9ddd4238aa1ea626520840f430c877";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThirdwebProvider clientId={id} activeChain={chain}>
      <App />
    </ThirdwebProvider>
  </BrowserRouter>
)
ReportWebVitals(console.log());

