import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentListPage from './pages/StudentListPage';
import RegistrationFormPage from './pages/RegistrationFormPage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentListPage/>}/>
          <Route path='/registrationForm' element={<RegistrationFormPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;