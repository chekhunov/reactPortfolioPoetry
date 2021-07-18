import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Header,Preloader } from './components';
import { Home } from './pages';


const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);

    return ( <div className = "wrapper" >

        <Header setIsLoading={setIsLoading} / >
          {isLoading ?
          (<Preloader isLoading={isLoading} />) :
        (<Home isLoading={isLoading} setIsLoading={setIsLoading} />)}

        </div>
    );
};

export default App;
