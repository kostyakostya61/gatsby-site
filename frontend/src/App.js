import React from 'react';
import Container from './container';
import { AuthProvider } from './components/context/auth-context';

function App() {
  return (
    <AuthProvider>
      <Container />
    </AuthProvider>
  );
}

export default App;
