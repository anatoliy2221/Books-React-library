
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SelectCategory from './pages/SelectCategory';
import { Suspense } from 'react';

const App = () => {


  return (
    <>
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:categoryId' element={<SelectCategory />} />
        </Routes>
      </Suspense>

    </>
  )
};

export default App;
