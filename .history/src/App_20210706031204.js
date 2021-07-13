import React                    from 'react';
import {BrowserRouter as Route} from "react-router-dom";
import {Header}                 from "./components";
import {Home}                   from "./pages";


const App = () => {
    return (
        <div className="wrapper" >
            <Header />

            <Home />

        </div >
    );
}

export default App;
