import React from 'react';
import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import {Row, Card, Col} from 'react-bootstrap';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import './App.css';

function Navigator({toggleWord}) {
  return (
    <>
      <Card className="VSMT_card" style={{"height":"45vh"}}  >
        <Card.Header className="VSMT_card_header">
            Navigator
        </Card.Header>
        <Card.Body className="VSMT_card_body">
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
    <Card className="VSMT_card" style={{"height":"50vh"}}  >
      <Card.Header className="VSMT_card_header">
        History
      </Card.Header>
      <Card.Body className='VSMT_card_body'>
        <div>Nothing to see here ..</div>           
      </Card.Body>
    </Card>
  )
}

function ValueSetView({theWord}) {
  return (
    <Card className="VSMT_card" style={{"height":"95vh"}}  >
      {/* <Card.Body> */}
        <Card.Header className="VSMT_card_header">
            Value Set
        </Card.Header>
        <Card.Body>
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel defaultSize={25}>
              <Definition theWord={theWord} />
            </Panel>
            <PanelResizeHandle style={{"width":"5px", "backgroundColor":"grey"}} />
            <Panel>
              <Expansion defaultSize={25} />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={25}>
              <ConceptDetail />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={25}>
              <ConceptBrowser />
            </Panel>
          </PanelGroup>
        
        </Card.Body>
      {/* </Card.Body> */}
    </Card>
  )
}

function Definition({theWord}) {
  return(
    // <Card className="VSMT_card" style={{"height":"88vh", "width":"30vw"}}>
    <Card className="VSMT_card" style={{"height":"88vh"}}>
      <Card.Header className="VSMT_card_header_2">
         Definition  {theWord}
      </Card.Header>
      <Card.Body>
        The word is: {theWord}
      </Card.Body>
    </Card>
  )
}

function Expansion() {
  return(
    // <Card className="VSMT_card" style={{"height":"88vh", "width":"40vw"}}>
    <Card className="VSMT_card" style={{"height":"88vh"}}>
      <Card.Header className="VSMT_card_header_2">
        Expansion
      </Card.Header>
    </Card>
  )
}

function ConceptBrowser() {
  return(
    // <Card className="VSMT_card" style={{"height":"88vh", "width":"5vw"}}>
    <Card className="VSMT_card" style={{"height":"88vh"}}>
      <Card.Header className="VSMT_card_header_2">
        Browser
      </Card.Header>
    </Card>
  )
}

function ConceptDetail() {
  return(
    // <Card className="VSMT_card" style={{"height":"88vh", "width":"5vw"}}>
    <Card className="VSMT_card" style={{"height":"88vh"}}>
      <Card.Header className="VSMT_card_header_2">
        Detail
      </Card.Header>
    </Card>
  )
}

function App() {
  const [theWord, setTheWord] = useState("hello")
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
            <ValueSetView theWord={theWord} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
