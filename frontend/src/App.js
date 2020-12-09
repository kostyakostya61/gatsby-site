import React, { useState } from 'react';
import Modal from './components/modal';
import Container from './Container';

function App() {
  // const [modalActive, setModalActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    // <div>
    //   <button onClick={() => setModalActive(false)}>modal</button>
    //   <Modal active={modalActive} setActive={setModalActive} />
    // </div>
    <div>
      
        <button onClick={() => setIsOpen(true)}>open modal</button>
        {isOpen && <Modal isClosed={isOpen} onClose={handleCloseModal} />}
      
    </div>
  );
}

export default App;
