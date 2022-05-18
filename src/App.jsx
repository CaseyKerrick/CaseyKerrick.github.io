import React from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
