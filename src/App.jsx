import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import {Row, Col, } from 'react-bootstrap';

import './App.css';

import UnmanglerCombo from './components/unmanglercombo';

function App() {
  
  const [theWord, setTheWord] = useState("hello")
  const [analysisResults, setAnalysisResults] = useState({"check_results":[]});
  const [enteredData, setEnteredData] = useState("Enter your data here!")

  function toggleWord() {
    if (theWord=="hello") {setTheWord("gosh!")}
    else {setTheWord("hello")}
  }
  
  return (
    <>
      <Container fluid className="bg-light">
        <Row style={{"height":"95vh"}}>        
          <Col xs={12}>
            <UnmanglerCombo 
              analysisResults={analysisResults} 
              setAnalysisResults={setAnalysisResults} 
              theWord={theWord} 
              toggleWord={toggleWord}
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
