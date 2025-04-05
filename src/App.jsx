import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import InputCreate from './InputCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {}
        <Route path="/create" element={<InputCreate />} /> {}
      </Routes>
    </Router>
  );
}

export default App;