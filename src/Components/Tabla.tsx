// src/Components/TablaCustom.tsx
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface DataItem {
  id: number;
  text1: string;
  text2: string;
  icon: string;
  image: string;
}

const TablaCustom: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState<DataItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('public/Datos/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleModal = (rowData: DataItem | null) => {
    setCurrentData(rowData);
    setModal(!modal);
  };

  return (
    <>
      <Table dark hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Texto 1</th>
            <th>Texto 2</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.text1}</td>
              <td>{row.text2}</td>
              <td>
                <i className={row.icon}></i>
              </td>
              <td>
                <Button color="secondary" onClick={() => toggleModal(row)}>Acción</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {currentData && (
        <Modal isOpen={modal} toggle={() => toggleModal(null)}>
          <ModalHeader toggle={() => toggleModal(null)}>Detalles del Registro</ModalHeader>
          <ModalBody>
            <p><strong>ID:</strong> {currentData.id}</p>
            <p><strong>Texto 1:</strong> {currentData.text1}</p>
            <p><strong>Texto 2:</strong> {currentData.text2}</p>
            <p><strong>Icono:</strong> <i className={currentData.icon}></i></p>
            
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

export default TablaCustom;
