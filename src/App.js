import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <div>
      <BrowserRouter basename='/formvalidation'>
      <LoginPage />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
