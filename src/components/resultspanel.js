import {Card} from 'react-bootstrap';

export default function ResultsPanel({analysisResults, enteredData}) {
  const DisplayData=analysisResults.check_results.map(
        (data)=>{
            return(
                <tr key={data.id}>
                    <td>{data.sctid_provided}</td>
                    <td>{JSON.stringify(data.validity)}</td>
                    <td>{JSON.stringify(data.mangling_suspected)}</td>
                    <td>{data.reconstructed_concept_ID}</td>
                </tr>
            )
        }
    )
  return(
    <Card className="myapp_card" style={{"height":"88vh"}}>
      <Card.Header className="myapp_card_header_2">
        Results
      </Card.Header>
      <Card.Body>
        <table>
          <tbody>
          <tr><td>hello</td><td></td></tr>
          {DisplayData}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  )
}