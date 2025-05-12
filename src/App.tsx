// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import NoPage from './pages/nopage';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

