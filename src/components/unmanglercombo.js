import { useRef } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import DataEntryPanel from "./dataentrypanel";
import HelpPanel from "./helppanel";
import ResultsPanel from "./resultspanel";
import SnomedVersion from "./snomed_version";

export default function UnmanglerCombo({
  ignoreDescriptions,
  setIgnoreDescriptions,
  analysisResults,
  setAnalysisResults,
  toggleWord,
  enteredData,
  setEnteredData,
  exampleData,
  termsAccepted,
  setTermsAccepted,
}) {
  console.log(analysisResults)
  const panelGroupRef = useRef(null);

  const resetPanels = () => {
    panelGroupRef.current.setLayout([26, 37, 37]);
  };

  const reset_ts_and_cs = () => {
    // localStorage.removeItem("terms_accepted");
    setTermsAccepted(false)
  };
  return (
    <Container fluid>
      <Card className="myapp_card" style={{ height: "95vh" }}>
        <Card.Header className="myapp_card_header">
          <Row className="w-100">
            <Col className="col-7">SNOMED CT Code Restorer</Col>
            <Col className="col-3">
              <SnomedVersion
                analysisResults={analysisResults}
                setAnalysisResults={setAnalysisResults}
              >
                {" "}
              </SnomedVersion>
            </Col>
            <Col className="col-2">
              <button style={{ padding: "2px" }} onClick={resetPanels}>
                Reset Panel Sizes{" "}
              </button>
              <button style={{ padding: "2px", marginLeft: "20px" }} onClick={reset_ts_and_cs}>
                T+Cs
              </button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <PanelGroup
            autoSaveId="example"
            direction="horizontal"
            ref={panelGroupRef}
          >
            <Panel defaultSize={20}>
              <HelpPanel
                setAnalysisResults={setAnalysisResults}
                toggleWord={toggleWord}
                enteredData={enteredData}
                setEnteredData={setEnteredData}
                exampleData={exampleData}
              />
            </Panel>
            <PanelResizeHandle
              style={{ width: "5px", backgroundColor: "grey" }}
            />
            <Panel defaultSize={30}>
              <DataEntryPanel
                ignoreDescriptions={ignoreDescriptions}
                setIgnoreDescriptions={setIgnoreDescriptions}
                setAnalysisResults={setAnalysisResults}
                toggleWord={toggleWord}
                enteredData={enteredData}
                setEnteredData={setEnteredData}
                exampleData={exampleData}
              />
            </Panel>
            <PanelResizeHandle
              style={{ width: "5px", backgroundColor: "grey" }}
            />
            <Panel defaultSize={30}>
              <ResultsPanel
                ignoreDescriptions={ignoreDescriptions}
                analysisResults={analysisResults}
                enteredData={enteredData}
              />
            </Panel>
          </PanelGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
