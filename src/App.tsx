import React from 'react';
import 'App.less';
import { BrowserRouter, Route } from 'react-router-dom'

import main from 'page/Main'
import detail from 'page/Detail'
import pagination from 'page/Pagination'
import ShoppingList from 'page/demo'

function App() {
  return (
    <BrowserRouter>
      <Route path='/'  exact render={main} />
      <Route path='/detail'  exact render={detail} />
      <Route path='/pagination'  exact component={pagination} />
      <Route path='/demo'  exact component={ShoppingList} props={'ssssss'} />
    </BrowserRouter>
  );
}

export default App;
