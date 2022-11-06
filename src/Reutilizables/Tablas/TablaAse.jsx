import Table from 'react-bootstrap/Table';

export const TablaAse = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Solicitado por</th>
          <th>Fecha</th>
          <th>Motivo</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>Fiscalización</td>
        </tr>
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>Accidente</td>
        </tr>
      </tbody>
    </Table>
  )
}
