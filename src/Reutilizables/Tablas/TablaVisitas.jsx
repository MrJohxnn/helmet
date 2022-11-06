import Table from 'react-bootstrap/Table';

export const TablaVisitas = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Agendado por</th>
          <th>Fecha agenda</th>
          <th>Fecha visita</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>05/08/2022</td>
        </tr>
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>05/08/2022</td>
        </tr>
      </tbody>
    </Table>
  )
}
