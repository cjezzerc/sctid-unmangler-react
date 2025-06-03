import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import {Row, Col, } from 'react-bootstrap';

import './App.css';

import UnmanglerCombo from './components/unmanglercombo';

function App() {
  
  const [analysisResults, setAnalysisResults] = useState({"check_results":[]});
  const [enteredData, setEnteredData] = useState(
    "37331000000100	| Comment note (record artifact) |\n"+
    "703421000	Temperature (observable entity)\n"+
    "1097811000000100	Arterial oxygen saturation breathing room air at rest (observable entity)\n"+
    "86290005	Respiratory rate (observable entity)\n"+
    "271637005	Pulse irregularly irregular (finding)\n"+
    "37331000000100	Comment note (record artifact)`"
  )

 
  
  return (
    <>
      <Container fluid className="bg-light">
        <Row style={{"height":"95vh"}}>        
          <Col xs={12}>
            <UnmanglerCombo 
              analysisResults={analysisResults} 
              setAnalysisResults={setAnalysisResults} 
              enteredData={enteredData}
              setEnteredData={setEnteredData}
              />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
