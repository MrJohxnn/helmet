import Table from 'react-bootstrap/Table';

export const TablaCapa = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Solicitado por</th>
          <th>Fecha</th>
          <th>Asunto capacitación</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>Uso de Extintores</td>
        </tr>
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>Primeros Auxilios</td>
        </tr>
      </tbody>
    </Table>
  )
}
