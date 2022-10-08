import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './App.less';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
