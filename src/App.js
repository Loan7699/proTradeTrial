import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/trangchu' element={ <Homepage /> }/>
      </Routes>
    </div>
  );
}
export default App;
