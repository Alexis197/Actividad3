import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToastAzul: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => setShowToast(!showToast);

  return (
    <div className="p-3 bg-dark my-2 rounded">
    {/*El componente retorna un div con clases de Bootstrap para aplicar padding, color de fondo oscuro (bg-dark), margen vertical (my-2) y bordes redondeados (rounded).*/}
      <Button color="primary" onClick={toggleToast}>Mostrar Toast</Button>

      {/*•	El div interior tiene clases de Bootstrap para posicionarlo fijo (position-fixed), en la esquina inferior derecha (bottom-0 end-0) con padding (p-3). El zIndex se establece en 11 para asegurarse de que el toast esté sobre otros elementos.*/}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <Toast isOpen={showToast}>
          <ToastHeader toggle={toggleToast} className="bg-primary text-white">
            Notificación
          </ToastHeader>
          <ToastBody className="bg-primary text-white">
            Este es un toast de color azul.
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastAzul;
/*

•	Dentro del div principal, hay un botón (Button) con el color primary (azul). Al hacer clic en este botón, se llama a la función toggleToast, que alterna el estado de showToast.


•	El componente Toast se muestra u oculta según el valor de showToast (isOpen={showToast}).

•	ToastHeader muestra el encabezado del toast con un botón de cierre que también llama a toggleToast para cerrar el toast. Se le asignan clases de Bootstrap para el color de fondo (bg-primary) y el color del texto (text-white).

•	ToastBody muestra el cuerpo del toast con el mismo color de fondo y texto.
*/
