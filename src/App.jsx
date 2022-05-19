import React from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </HashRouter>
  );
}

export default App;
