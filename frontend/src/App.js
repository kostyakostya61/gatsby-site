import React, { useState } from 'react';
import Modal from './components/modal';
import Container from './Container';

function App() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div>
      <button onClick={() => setModalActive(false)}>modal</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
