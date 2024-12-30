import React from 'react';
import { useNavigate } from '@modern-js/runtime/router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}
