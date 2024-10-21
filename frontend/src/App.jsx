import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div style={{
      backgroundImage: "url('images/bg.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

