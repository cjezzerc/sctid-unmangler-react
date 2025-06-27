import { useState } from "react";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import "./App.css";

import UnmanglerCombo from "./components/unmanglercombo";
import TermsModal from "./components/ts_and_cs";

function App() {
  const [enteredData, setEnteredData] = useState("");
  const [ignoreDescriptions, setIgnoreDescriptions] = useState(true);
  const [inputsAsRun, setInputsAsRun] = useState({
    ignoreDescriptions: true,
    enteredData: "",
  });
  const [analysisResults, setAnalysisResults] = useState({
    check_results: [],
    metadata: { snomed_release: undefined },
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      <Container fluid className="bg-light">
        <TermsModal
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
        />
        <Row style={{ height: "95vh" }}>
          <Col xs={12}>
            <UnmanglerCombo
              enteredData={enteredData}
              setEnteredData={setEnteredData}
              ignoreDescriptions={ignoreDescriptions}
              setIgnoreDescriptions={setIgnoreDescriptions}
              inputsAsRun={inputsAsRun}
              setInputsAsRun={setInputsAsRun}
              analysisResults={analysisResults}
              setAnalysisResults={setAnalysisResults}
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
