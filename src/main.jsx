import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import App from './app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SpeedInsights/>
   <Analytics />
    <App />
  </StrictMode>
)
