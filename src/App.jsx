import { useState } from "react";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import "./App.css";

import UnmanglerCombo from "./components/unmanglercombo";
import TermsModal from "./components/ts_and_cs";

function App() {
  const [ignoreDescriptions, setIgnoreDescriptions] = useState(true);
  const [analysisResults, setAnalysisResults] = useState({ check_results: [], metadata: {snomed_release:undefined} });
  const [enteredData, setEnteredData] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false)
  
  return (
    <>
      <Container fluid className="bg-light">
        <TermsModal termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted}/>
        <Row style={{ height: "95vh" }}>
          <Col xs={12}>
            <UnmanglerCombo
              ignoreDescriptions={ignoreDescriptions}
              setIgnoreDescriptions={setIgnoreDescriptions}
              analysisResults={analysisResults}
              setAnalysisResults={setAnalysisResults}
              enteredData={enteredData}
              setEnteredData={setEnteredData}
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
