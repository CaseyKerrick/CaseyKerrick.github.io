import React from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/* <Router basename="/"  >
            <Routes>
                <Route path="/Random_User" element={<GetUser/>} />
                <Route path="/Images" element={<RandomImage/>} />
                <Route path="/Dogs" element={<Dog/>} />
                <Route path="/Giphy" element={<Giphy/>} />
                <Route path="/Cats" element={<Cat/>} />
                <Route path="/"     element={<Home/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
            </Router> */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} /> */}
        <Route path="/" component={Home}>
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
