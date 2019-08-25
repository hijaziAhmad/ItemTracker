import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ItemsList from "./components/item-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-item.component";
import CreateCustomer from "./components/create-customer.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <br/>
        <Route path ='/' exact component={ItemsList} />
        <Route path ='/edit/:id' exact component={EditItem} />
        <Route path ='/create' exact component={CreateItem} />
        <Route path ='/customer' exact component={CreateCustomer} />
      </div>
    </Router>
  );
}

export default App;
