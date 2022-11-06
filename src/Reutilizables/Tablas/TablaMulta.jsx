import Table from 'react-bootstrap/Table';

export const TablaMulta = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Nº Multa</th>
          <th>Fecha</th>
          <th>Motivo</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>100254</td>
          <td>05/08/2022</td>
          <td>Zonas de seguridad sin señalizar</td>
        </tr>
      </tbody>
    </Table>
  )
}
