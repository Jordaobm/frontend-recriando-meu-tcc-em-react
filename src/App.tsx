import React from 'react';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';



function App() {




  return (

    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>


  );
}

export default App;
