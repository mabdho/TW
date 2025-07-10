
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Suva } from './pages/cities/Suva';
import { Auckland } from './pages/cities/Auckland';
import { Copenhagen } from './pages/cities/Copenhagen';
import { Tokyo } from './pages/cities/Tokyo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cities/suva" element={<Suva />} />
        <Route path="/cities/auckland" element={<Auckland />} />
        <Route path="/cities/copenhagen" element={<Copenhagen />} />
        <Route path="/cities/tokyo" element={<Tokyo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
