import React from 'react';
import Container from './container';
import { AuthProvider } from './components/context/auth-context';
import { UserProvider } from './components/context/user-context';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
