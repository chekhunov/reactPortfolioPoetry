import React                    from 'react';
import axios            from "axios";
import {BrowserRouter as Route} from "react-router-dom";
import {Header}                 from "./components";
import {Home}                   from "./pages";


const App = () => {
  const [top, setTop] = React.useState([]);

   React.useEffect(() => {
    
        axios.get('top.json')
             .then(res => {
                 setItems(res.data)
             })
    }, []);

    return (
        <div className="wrapper" >
            <Header />

            <Home top={top} />

        </div >
    );
}

export default App;
