import {Card,Form, Button} from 'react-bootstrap';

import ChangeWordButton from './changewordbutton';

export default function DataEntryPanel({
    setTheMessage, 
    theWord, 
    toggleWord,  
    enteredData,
    setEnteredData}) 
    {
  
  function pastefunction() {
    fetch('http://localhost:8000/time_please')
    .then(res => res.json())
    .then(data => {setTheMessage(data)});
	}
  
  return(
    <Card className="myapp_card" style={{"height":"88vh"}}>
      <Card.Header className="myapp_card_header_2">
        Data entry ({theWord})
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Paste in this box</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={enteredData}/>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={pastefunction} >Primary</Button>
        <ChangeWordButton  toggleWord={toggleWord}></ChangeWordButton>
      </Card.Body>
    </Card>
  )
}