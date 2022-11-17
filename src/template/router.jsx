import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import PersonagensPage from '../routes/personagens-page';
import LoginPage from '../routes/login-page';

const Routes = () => {
  return (
    <BrowserRouter> 
      <Route path='/personagens-page' component={PersonagensPage}></Route>
      <Route path='/login-page' component={LoginPage}></Route>
    </BrowserRouter>
  );
}

export default Routes;