import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from '../pages/Landing';
import OtherPage from '../pages/OtherPage';

const Routes: React.FC = () => {
    
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Landing} /> 
              <Route path="/outra" component={OtherPage} />              
            </Switch>
        </BrowserRouter>
    );

}
export default Routes;  