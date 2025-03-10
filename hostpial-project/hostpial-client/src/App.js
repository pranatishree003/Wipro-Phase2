import { Route, Routes } from 'react-router-dom';
import './App.css';

import ShowDoctor from './Components/ShowDoctor';
import Menu from './Components/Menu';
import InsertDoctor from './Components/InsertDoctor';
import ShowPatient from './Components/ShowPatient';
import InsertPatient from './Components/InsertPatient';

function App() {
  return (
    <div className='App'>
      <Menu />

      <Routes>
        <Route path='/' element={<ShowDoctor />} />
        <Route path='/show-doctor' element={<ShowDoctor />} />
        <Route path='/insert-doctor' element={<InsertDoctor />} />
        <Route path='/show-patient' element={<ShowPatient />} />
        <Route path='/insert-patient' element={<InsertPatient />} />
      </Routes>
    </div>
  );
}

export default App;
