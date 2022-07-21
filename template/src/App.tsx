import { Route, Routes } from 'react-router-dom';
import './App.less';
import { Home } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
