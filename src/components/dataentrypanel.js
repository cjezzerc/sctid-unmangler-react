import { useState } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function DataEntryPanel({
  setAnalysisResults,
  enteredData,
  setEnteredData,
  exampleData,
}) {
  const [ignoreDescriptions, setIgnoreDescriptions] = useState(true);

  function IgnoreDescriptionSwitch() {
    function handleClick(event) {
      setIgnoreDescriptions(event.target.checked);
      console.log(ignoreDescriptions);
    }
    return (
      <Form.Check
        type="checkbox"
        id="switch-ignore-descriptions"
        label="Ignore Description IDs"
        defaultChecked={ignoreDescriptions}
        onClick={handleClick}
      />
    );
  }

  function submitfunction() {
    fetch("http://localhost:8000/receive_entered_data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entered_text: enteredData,
        did_ignore_flag: ignoreDescriptions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAnalysisResults(data);
      });
  }

  function get_example_data() {
    console.log("CLicked get example data button");
    // console.log(exampleData)
    setEnteredData(exampleData);
  }

  // const renderTooltipExampleData = (props) => (
  //   <Tooltip id="button-tooltip-example-data" {...props}>
  //     This will replace the data in the data entry area with example data &nbsp;{" "}
  //     <a href="https://example.com/" target="#">
  //       (learn more)
  //     </a>
  //   </Tooltip>
  // );

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            <div>
              Paste codes in box below, then choose an action. The codes must be
              the first thing on each line. Text such as terms can come after
              the codes. Pasting a couple of columns from a spreadsheet should
              work. As should data entered in the form such as{" "}
              <i> 125605004 |Fracture of bone (disorder)|</i>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            <Button
              variant="outline-secondary"
              className="myapp_button"
              onClick={submitfunction}
            >
              Check Codes
            </Button>{" "}
          </Col>
          <Col className="align-self-center">
            <IgnoreDescriptionSwitch></IgnoreDescriptionSwitch>
          </Col>

          <Col>
            {/* <OverlayTrigger
              delay={{ show: 250, hide: 500 }}
              overlay={renderTooltipExampleData}
            > */}
            <Button
              variant="outline-secondary"
              className="myapp_button"
              onClick={get_example_data}
            >
              Get example data
            </Button>
            {/* </OverlayTrigger> */}
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Enter/paste data here .."
              rows={20}
              value={enteredData}
              onChange={(event) => setEnteredData(event.target.value)}
              className="smaller_font"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
