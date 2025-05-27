import React from 'react';
import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import {Row, Card, Col} from 'react-bootstrap';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import './App.css';

function Navigator({toggleWord}) {
  return (
    <>
      <Card className="myapp_card" style={{"height":"45vh"}}  >
        <Card.Header className="myapp_card_header">
            Navigator
        </Card.Header>
        <Card.Body className="myapp_card_body">
          <div>My Value Sets</div>
          <div>Search</div> 
          <div>New Value Set</div> 
          <div>Import</div> 
          <div>
            <ChangeWordButton toggleWord={toggleWord}></ChangeWordButton>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

function ChangeWordButton({toggleWord}) {
  return(
    <button onClick={toggleWord}>
      click to change word
    </button> 
  )
}

function RecentActivity() {
  return (
    <Card className="myapp_card" style={{"height":"50vh"}}  >
      <Card.Header className="myapp_card_header">
        History
      </Card.Header>
      <Card.Body className='myapp_card_body'>
        <div>Nothing to see here ..</div>           
      </Card.Body>
    </Card>
  )
}

function ValueSetView({theMessage, setTheMessage, theWord}) {
  return (
    <Card className="myapp_card" style={{"height":"95vh"}}  >
      {/* <Card.Body> */}
        <Card.Header className="myapp_card_header">
            Value Set
        </Card.Header>
        <Card.Body>
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel>
              <Expansion defaultSize={25}  setTheMessage={setTheMessage} theWord={theWord} />
            </Panel>
            <PanelResizeHandle style={{"width":"5px", "backgroundColor":"grey"}} />
            <Panel defaultSize={25}>
              <ConceptDetail theMessage={theMessage}/>
            </Panel>
          </PanelGroup>
        </Card.Body>
      {/* </Card.Body> */}
    </Card>
  )
}

function Expansion({setTheMessage, theWord}) {
  function pastefunction() {
    fetch('http://localhost:5001/health').then(res => res.json()).then(data => {setTheMessage(data)});
	}
  return(
    <Card className="myapp_card" style={{"height":"88vh"}}>
      <Card.Header className="myapp_card_header_2">
        Expansion {theWord}
      </Card.Header>
      <Card.Body>
        <textarea placeholder={"Paste content here..."}
            onPaste={pastefunction}
            style={{ padding: '10px', 
                fontSize: "20px", 
                resize:"none",
                width:"90%",
                height:"90%",
                minWidth:"90%",
                maxWidth:"90%" }}>
        </textarea>
      </Card.Body>
    </Card>
  )
}



function ConceptDetail({theMessage}) {
  return(
    // <Card className="myapp_card" style={{"height":"88vh", "width":"5vw"}}>
    <Card className="myapp_card" style={{"height":"88vh"}}>
      <Card.Header className="myapp_card_header_2">
        Detail
      </Card.Header>
      <Card.Body>
        <div> {theMessage} </div>
      </Card.Body>
    </Card>
  )
}

function App() {
  const [theWord, setTheWord] = useState("hello")
  const [theMessage, setTheMessage] = useState("not set yet!");
  function toggleWord() {
    if (theWord=="hello") {setTheWord("gosh!")}
    else {setTheWord("hello")}
  }
  return (
    <>
      <Container fluid className="bg-light">
        <Row style={{"height":"95vh"}}>        
          <Col xs={2}>
            <Navigator toggleWord={toggleWord} />
            <RecentActivity />
          </Col>
          <Col xs={10}>
            <ValueSetView theMessage={theMessage} setTheMessage={setTheMessage} theWord={theWord} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
