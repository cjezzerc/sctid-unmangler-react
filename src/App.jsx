import { useState } from "react";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import "./App.css";

import UnmanglerCombo from "./components/unmanglercombo";

function App() {
  const [analysisResults, setAnalysisResults] = useState({ check_results: [] });
  const [enteredData, setEnteredData] = useState(
    `1097811000000100	Arterial oxygen saturation breathing room air at rest (observable entity)
11805901000001100
999002071000000000
900000000000462000
1089881000119100        Minimal keratinized residual ridge mucosa
11750801000001100
10760821000119100
900000000000497000
SNO63700574768824
37331000000100	| Comment note (record artifact) |
703421000	Temperature (observable entity)
15366271000001108
8388100084567440 (1Made up; 6 digits; penult digit not 1 or 0)
4036431000001100 Made up; not valid; reconstruction does not exist(16)
4736431000001100 Made up; valid but not in release; R-CID is the same(16)
29760821000119100  Made up; Valid but not in release; R-CID is same
28760821000119100  Made up; not Valid ; R-CID is same`
  );

  return (
    <>
      <Container fluid className="bg-light">
        <Row style={{ height: "95vh" }}>
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
  );
}

export default App;
