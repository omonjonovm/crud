import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import FormList from './components/FormList';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<FormList />} />
          <Route path='/create' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
