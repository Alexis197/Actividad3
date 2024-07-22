import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalC: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Mostrar Modal</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Título del Modal</ModalHeader>
        <ModalBody>
          Este es el contenido del modal.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
          <Button color="primary" onClick={toggle}>Guardar cambios</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalC;
