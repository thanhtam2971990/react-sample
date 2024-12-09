import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { Admin } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { useDispatch } from 'react-redux';
import { authAction } from 'features/auth/authSlide';
import { useNavigateHelper } from './hooks/useNavigateHelper';

function App() {
  useNavigateHelper();
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
