import * as React from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from 'features/auth/authSlide';

export interface AdminProps {
}

export function Admin (props: AdminProps) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('access_token');
  return (
    <div>
        {token && (
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded"
          onClick={() => dispatch(authAction.logout())}
        >
          Logout
        </button>
      )}
      Admin layout
    </div>
  );
}
