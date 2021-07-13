import React                    from 'react';
import {BrowserRouter as Route} from "react-router-dom";
import {Header}                 from "./components";
import {Home}                   from "./pages";


const App = () => {
  const [items, setItems] = React.useState([]);

   React.useEffect(() => {
    
        axios.get('bd.json')
             .then(res => {
                 setItems(res.data)
             })
    }, []);


    return (
        <div className="wrapper" >
            <Header />

            <Home items={items} />

        </div >
    );
}

export default App;
