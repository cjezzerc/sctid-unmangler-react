import { useRef } from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import DataEntryPanel from "./data_entry_panel";
import HelpPanel from "./help_panel";
import ResultsPanel from "./results_panel";
import SnomedVersion from "./snomed_version";

export default function PanelCombo({
  ignoreDescriptions,
  setIgnoreDescriptions,
  analysisResults,
  setAnalysisResults,
  enteredData,
  setEnteredData,
  inputsAsRun,
  setInputsAsRun,
  setTermsAccepted,
}) {
  const panelGroupRef = useRef(null);

  const resetPanels = () => {
    panelGroupRef.current.setLayout([26, 37, 37]);
  };

  const reset_ts_and_cs = () => {
    setTermsAccepted(false);
  };

  return (
    <Container fluid>
      <Card className="myapp_card" style={{ height: "90vh" }}>
        <Card.Header className="myapp_card_header">
          <Row className="w-100">
            <Col className="col-6">SNOMED CT Code Restorer</Col>
            <Col className="col-3">
              <SnomedVersion
                analysisResults={analysisResults}
                setAnalysisResults={setAnalysisResults}
              ></SnomedVersion>
            </Col>
            <Col className="col-3">
              <Button
                variant="secondary"
                style={{ padding: "2px" }}
                onClick={resetPanels}
              >
                Reset Panel Sizes
              </Button>
              <Button
                variant="secondary"
                style={{ padding: "2px", marginLeft: "20px" }}
                onClick={reset_ts_and_cs}
              >
                T+Cs
              </Button>
              <Button
                href="mailto:setchecks@jeremycraven.org.uk"
                target="#"
                variant="secondary"
                style={{ padding: "2px", marginLeft: "20px" }}
              >
                Feedback
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <PanelGroup direction="horizontal" ref={panelGroupRef}>
            <Panel defaultSize={20}>
              <HelpPanel setEnteredData={setEnteredData} />
            </Panel>
            <PanelResizeHandle className="panel_handle" />
            <Panel defaultSize={30}>
              <DataEntryPanel
                ignoreDescriptions={ignoreDescriptions}
                setIgnoreDescriptions={setIgnoreDescriptions}
                setAnalysisResults={setAnalysisResults}
                enteredData={enteredData}
                setEnteredData={setEnteredData}
                inputsAsRun={inputsAsRun}
                setInputsAsRun={setInputsAsRun}
              />
            </Panel>
            <PanelResizeHandle className="panel_handle" />
            <Panel defaultSize={30}>
              <ResultsPanel
                ignoreDescriptions={ignoreDescriptions}
                analysisResults={analysisResults}
                enteredData={enteredData}
                inputsAsRun={inputsAsRun}
              />
            </Panel>
          </PanelGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
