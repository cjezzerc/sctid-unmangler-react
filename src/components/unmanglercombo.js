
import { Card } from 'react-bootstrap';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import DataEntryPanel from './dataentrypanel';
import ResultsPanel from './resultspanel';

export default function UnmanglerCombo({
    theMessage, 
    setTheMessage, 
    theWord, 
    toggleWord,
    enteredData,
    setEnteredData}) 
    {
  return (
    <Card className="myapp_card" style={{"height":"95vh"}}  >
      {/* <Card.Body> */}
        <Card.Header className="myapp_card_header">
            Unmangler
        </Card.Header>
        <Card.Body>
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel>
              <DataEntryPanel 
                defaultSize={25}  
                setTheMessage={setTheMessage} 
                theWord={theWord} 
                toggleWord={toggleWord} 
                enteredData={enteredData}
                setEnteredData={setEnteredData}
                />
            </Panel>
            <PanelResizeHandle style={{"width":"5px", "backgroundColor":"grey"}} />
            <Panel defaultSize={25}>
              <ResultsPanel theMessage={theMessage}
              />
            </Panel>
          </PanelGroup>
        </Card.Body>
      {/* </Card.Body> */}
    </Card>
  )
}