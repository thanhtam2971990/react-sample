import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Route, Routes } from "react-router-dom";
import LoginPage from 'features/pages/LoginPage';
import { Admin } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log("response", response)
    })
  })
  return (
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={
          <PrivateRoute>
          <Admin />
          </PrivateRoute>
          } />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;
