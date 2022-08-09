import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          MaskyGreen: [
            "#8EDF9D",
            "#75D787",
            "#5DD072",
            "#48CA60",
            "#38C251",
            "#33B04A",
            "#2EA043",
            "#29903C",
            "#258236",
            "#227531"
          ],
          MaskyBlue: [
            "#273345",
            "#202A39",
            "#1B2330",
            "#161D28",
            "#131821",
            "#10141C",
            "#0D1117",
            "#0A0E12",
            "#080B0F",
            "#07090C",
          ]
        },
        colorScheme: 'dark',
        primaryColor: 'MaskyGreen',  
        fontFamily: 'Jost, sans serif',
        headings: {
          fontFamily: 'Jost, sans serif',
          sizes: {
            h1: { fontSize: 64 },
            h2: { fontSize: 48 },
            h3: { fontSize: 32 },
            h4: { fontSize: 24 },
            h5: { fontSize: 20 },
            h6: { fontSize: 16 },
          },
        },
        spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
        radius: { sm: 4, md: 8, lg: 16, xl: 24 },
        shadows: 'lg',
        fontSizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);