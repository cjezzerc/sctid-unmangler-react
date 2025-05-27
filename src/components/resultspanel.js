import {Card} from 'react-bootstrap';

export default function ResultsPanel({theMessage}) {
  return(
    <Card className="myapp_card" style={{"height":"88vh"}}>
      <Card.Header className="myapp_card_header_2">
        Results
      </Card.Header>
      <Card.Body>
        <div> {theMessage} </div>
      </Card.Body>
    </Card>
  )
}