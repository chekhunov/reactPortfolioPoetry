import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Header,Preloader } from './components';
import { Home } from './pages';

const App = ({appState}) => {
  const [isLoading, setIsLoading] = React.useState(false);

    return ( <div className = "wrapper" >

        <Header / >
          {isLoading ?
          (<Preloader isLoading={isLoading} />) :
        (<Home isLoading={isLoading} setIsLoading={setIsLoading} appState={appState} />)}

        </div>
    );
};

export default App;
