import { Card, Container } from "react-bootstrap";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import DataEntryPanel from "./dataentrypanel";
import ResultsPanel from "./resultspanel";

export default function UnmanglerCombo({
  analysisResults,
  setAnalysisResults,
  toggleWord,
  enteredData,
  setEnteredData,
  exampleData,
}) {
  return (
    <Container fluid>
      <Card className="myapp_card" style={{ height: "95vh" }}>
        {/* <Card.Body> */}
        <Card.Header className="myapp_card_header">
          SNOMED CT Code Restorer
        </Card.Header>
        <Card.Body>
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel>
              <DataEntryPanel
                defaultSize={25}
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
            <Panel defaultSize={25}>
              <ResultsPanel
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
