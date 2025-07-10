import { Route, Router } from 'wouter';
import Home from './pages/home';
import NotFound from './pages/not-found';

function TestApp() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/test" component={() => <div>Test page works!</div>} />
      <Route component={NotFound} />
    </Router>
  );
}

export default TestApp;