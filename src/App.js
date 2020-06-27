import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then(json => {
    //     setPizzas(json.pizzas);
    //   });

    axios.get('/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    })

  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
