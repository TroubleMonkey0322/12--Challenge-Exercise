import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

return (
  <div>
      <Header />
      <Content />
      <Footer />
    </div>
);
}

const App = () => {
  return (
      <Router>
          <div>
              <Navigation />
              <Switch>
                  <Route path="/" exact component={AboutMe} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/resume" component={Resume} />
              </Switch>
          </div>
      </Router>
  );
};

export default App;